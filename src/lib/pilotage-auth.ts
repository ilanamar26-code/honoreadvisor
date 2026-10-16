export const PILOTAGE_COOKIE = "hp_pilotage";

// Jeton de session : empreinte SHA-256 du mot de passe et du secret serveur.
// Changer PILOTAGE_PASSWORD ou PILOTAGE_SECRET invalide toutes les sessions ouvertes.
export async function sessionToken(): Promise<string | null> {
  const password = process.env.PILOTAGE_PASSWORD;
  const secret = process.env.PILOTAGE_SECRET;
  if (!password || !secret) return null;
  const data = new TextEncoder().encode(`${secret}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
