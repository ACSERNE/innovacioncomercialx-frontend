const API_URL = "https://copyrights-assure-administrative-identifies.trycloudflare.com/api/auth";

export async function login(correo, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Error al iniciar sesión");
  }

  return data;
}

