import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Dashboard() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    api.getProductos(token).then((data) => {
      setProductos(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Productos disponibles</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio Unitario</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{p.descripcion}</td>
              <td>${p.precio_unitario}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

