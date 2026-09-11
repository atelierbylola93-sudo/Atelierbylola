// Stockage de session auth Supabase — utilise localStorage en production.
export function brokeredPreviewStorage() {
  if (typeof window === 'undefined') return undefined;
  return localStorage;
}
