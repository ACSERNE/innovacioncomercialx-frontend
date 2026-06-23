export const API_URL = import.meta.env.VITE_API_URL || 'https://innovacioncomercialx-backend.onrender.com/api';

export async function apiPost(path, body) {
  const res = await fetch(API_URL + path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text)
  }

  return res.json()
}
