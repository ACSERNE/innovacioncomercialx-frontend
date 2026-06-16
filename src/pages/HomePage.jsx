export default function HomePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bienvenido a ComercialX</h1>
      <p>Tu plataforma para gestión, tienda en línea y cockpit técnico.</p>

      <h2>📂 Estructura del proyecto</h2>
      <pre>
innovacioncomercialx/
├─ backend/        # API Node.js + Express
├─ frontend-web/   # Aplicación React
├─ frontend-mobile/# Aplicación React Native (Expo)
├─ docker-compose.yml
├─ .env
└─ README.md
      </pre>

      <h2>📞 Contacto</h2>
      <p>Correo: innovacioncomercialx@gmail.com</p>

      <h2>⚖️ Licencia</h2>
      <p>MIT License</p>

      <div style={{ marginTop: "2rem" }}>
        <a href="/login">Ingresar</a> |{" "}
        <a href="/register">Crear cuenta</a> |{" "}
        <a href="/store">Tienda</a>
      </div>
    </div>
  );
}
