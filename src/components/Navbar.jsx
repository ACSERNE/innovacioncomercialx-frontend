import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "1rem", color: "#fff" }}>Inicio</Link>
      <Link to="/store" style={{ marginRight: "1rem", color: "#fff" }}>Tienda</Link>
      <Link to="/login" style={{ marginRight: "1rem", color: "#fff" }}>Ingresar</Link>
      <Link to="/register" style={{ color: "#fff" }}>Crear cuenta</Link>
    </nav>
  );
}
