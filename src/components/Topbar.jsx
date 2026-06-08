export default function Topbar() {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Innovación Comercial X</h1>

      <button
        className="bg-red-500 px-4 py-2 rounded"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Cerrar sesión
      </button>
    </header>
  );
}
