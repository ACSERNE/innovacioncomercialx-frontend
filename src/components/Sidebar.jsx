import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-6">
      <h2 className="text-2xl font-bold mb-8">Cockpit</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-blue-400">Dashboard</Link>
        <Link to="/productos" className="hover:text-blue-400">Productos</Link>
        <Link to="/ventas" className="hover:text-blue-400">Ventas</Link>
        <Link to="/transacciones" className="hover:text-blue-400">Transacciones</Link>
      </nav>
    </aside>
  );
}
