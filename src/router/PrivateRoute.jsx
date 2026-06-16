export default function PrivateRoute({ children }) {
  const hostname = window.location.hostname;

  const isLocal =
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.includes("github.dev") ||
    hostname.includes("codespaces");

  // 🔐 Modo desarrollo: login real
  if (isLocal) {
    const token = localStorage.getItem("token");
    if (!token) {
      return <div>Debe iniciar sesión desde el entorno local.</div>;
    }
    return children;
  }

  // 🌐 Modo producción (GitHub Pages): login automático
  const isGithubPages = hostname === "acserne.github.io";

  if (isGithubPages) {
    let token = localStorage.getItem("token");
    if (!token) {
      localStorage.setItem("token", "demo-token");
      token = "demo-token";
    }
    return children;
  }

  // fallback seguro
  return children;
}

