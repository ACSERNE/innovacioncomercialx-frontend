const API_URL = import.meta.env.VITE_API_URL;

export const api = {
  login: async (correo, password) => {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, password })
    });
    return res.json();
  },

  getProductos: async (token) => {
    const res = await fetch(`${API_URL}/api/producto`, {
      headers: { "Authorization": `Bearer ${token}` }
    });
    return res.json();
  },

  crearTransaccion: async (token, data) => {
    const res = await fetch(`${API_URL}/api/transaccion`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return res.json();
  }
};

