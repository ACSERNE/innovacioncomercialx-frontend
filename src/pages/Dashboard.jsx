import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);

  const hostname = window.location.hostname;
  const isGithubPages = hostname.includes("github.io");

  useEffect(() => {
    if (isGithubPages) {
      // 🌐 Modo DEMO para GitHub Pages
      setTimeout(() => {
        setData({
          ventasHoy: 12,
          totalDia: 85000,
          clientes: 7,
          servicios: 4,
        });
      }, 500);
      return;
    }

    // 🔐 Modo real (local / codespaces)
    fetch(import.meta.env.VITE_API_URL + "/dashboard")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => setData({ error: true }));
  }, []);

  if (!data) return <div>Cargando...</div>;

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Ventas hoy: {data.ventasHoy}</p>
      <p>Total del día: ${data.totalDia}</p>
      <p>Clientes atendidos: {data.clientes}</p>
      <p>Servicios realizados: {data.servicios}</p>
    </div>
  );
}

