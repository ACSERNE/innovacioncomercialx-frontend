import { useEffect, useState } from "react";

export default function Reportes() {
  const [reporte, setReporte] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${import.meta.env.VITE_API_URL}/api/reportes`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((r) => r.json())
      .then(setReporte);
  }, []);

  return (
    <div>
      <h2>Reportes</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Ventas</th>
            <th>Ingresos</th>
          </tr>
        </thead>

        <tbody>
          {reporte.map((r) => (
            <tr key={r.producto_id}>
              <td>{r.nombre}</td>
              <td>{r.total_ventas}</td>
              <td>${r.total_ingresos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
