// Vercel Serverless Function — SSR handler pour TanStack Start
// Ce fichier reçoit TOUTES les requêtes non-statiques et les passe au serveur SSR.
import { createServer } from '../dist/server/server.js';

let handler;

export default async function (req, res) {
  if (!handler) {
    const mod = await import('../dist/server/server.js');
    handler = mod.default ?? mod;
  }

  // Convertir req/res Node.js en Request/Response Fetch API
  const url = `https://${req.headers.host}${req.url}`;
  const method = req.method;
  const headers = new Headers(req.headers);

  let body = undefined;
  if (method !== 'GET' && method !== 'HEAD') {
    body = await new Promise((resolve) => {
      const chunks = [];
      req.on('data', (c) => chunks.push(c));
      req.on('end', () => resolve(Buffer.concat(chunks)));
    });
  }

  const request = new Request(url, { method, headers, body });

  try {
    const response = await handler.fetch(request, process.env, {});
    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));
    const buffer = await response.arrayBuffer();
    res.end(Buffer.from(buffer));
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
