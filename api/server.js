// Vercel Serverless Function — TanStack Start SSR handler
// Ce fichier adapte le handler Web Fetch API de TanStack Start
// vers l'interface Node.js IncomingMessage/ServerResponse de Vercel.

let handlerPromise;

function getHandler() {
  if (!handlerPromise) {
    handlerPromise = import('../dist/server/server.js').then(
      (m) => m.default ?? m
    );
  }
  return handlerPromise;
}

/**
 * Converts a Node.js IncomingMessage to a Web Request.
 */
async function toWebRequest(req) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
  const url = new URL(req.url, `${protocol}://${host}`);

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        value.forEach((v) => headers.append(key, v));
      } else {
        headers.set(key, value);
      }
    }
  }

  const method = req.method || 'GET';
  const hasBody = method !== 'GET' && method !== 'HEAD';

  let body = null;
  if (hasBody) {
    body = await new Promise((resolve, reject) => {
      const chunks = [];
      req.on('data', (chunk) => chunks.push(chunk));
      req.on('end', () => resolve(Buffer.concat(chunks)));
      req.on('error', reject);
    });
  }

  return new Request(url.toString(), {
    method,
    headers,
    body: hasBody && body && body.length > 0 ? body : null,
  });
}

export default async function handler(req, res) {
  try {
    const server = await getHandler();
    const webRequest = await toWebRequest(req);
    const webResponse = await server.fetch(webRequest);

    res.statusCode = webResponse.status;
    webResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const buffer = await webResponse.arrayBuffer();
    res.end(Buffer.from(buffer));
  } catch (error) {
    console.error('[Vercel SSR] Unhandled error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<!doctype html><html><body><h1>500 – Internal Server Error</h1></body></html>');
  }
}
