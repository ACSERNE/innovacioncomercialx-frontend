import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
        <Link to="/dashboard" style={{ marginRight: 20, color: "#fff" }}>Dashboard</Link>
        <Link to="/ventas" style={{ marginRight: 20, color: "#fff" }}>Ventas</Link>
        <Link to="/flujo-caja" style={{ marginRight: 20, color: "#fff" }}>Flujo de Caja</Link>
        <Link to="/reportes" style={{ marginRight: 20, color: "#fff" }}>Reportes</Link>
        <button
          style={{ float: "right" }}
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Cerrar sesión
        </button>
      </nav>

      <div style={{ padding: 20 }}>
        {children}
      </div>
    </div>
  );
}

