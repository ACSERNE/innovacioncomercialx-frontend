import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function FlujoCaja() {
  const [movimientos, setMovimientos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${import.meta.env.VITE_API_URL}/api/flujo-caja`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((r) => r.json())
      .then(setMovimientos);
  }, []);

  return (
    <div>
      <h2>Flujo de Caja</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Tipo</th>
            <th>Monto</th>
          </tr>
        </thead>

        <tbody>
          {movimientos.map((m) => (
            <tr key={m.id}>
              <td>{m.fecha}</td>
              <td>{m.tipo}</td>
              <td>${m.monto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
