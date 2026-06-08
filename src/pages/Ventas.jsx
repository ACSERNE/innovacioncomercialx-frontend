import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Ventas() {
  const [productos, setProductos] = useState([]);
  const [productoId, setProductoId] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    api.getProductos(token).then(setProductos);
  }, []);

  const crearVenta = async () => {
    const token = localStorage.getItem("token");

    const data = {
      producto_id: productoId,
      cantidad: Number(cantidad),
      tipo: "venta"
    };

    const res = await api.crearTransaccion(token, data);

    if (res.id) {
      setMensaje("Venta registrada correctamente");
    } else {
      setMensaje("Error al registrar venta");
    }
  };

  return (
    <div>
      <h2>Registrar Venta</h2>

      <select value={productoId} onChange={(e) => setProductoId(e.target.value)}>
        <option value="">Seleccione un producto</option>
        {productos.map((p) => (
          <option key={p.id} value={p.id}>
            {p.nombre} (Stock: {p.stock})
          </option>
        ))}
      </select>

      <input
        type="number"
        min="1"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />

      <button onClick={crearVenta}>Registrar</button>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}
