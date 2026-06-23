import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Login from './Login'

function Home() {
  return (
    <section id="home">
      <h1>Bienvenido a ComercialX</h1>
      <p>Tu plataforma para gestión, tienda en línea y cockpit técnico.</p>
      <p>
        Inicio | Tienda | Ingresar | Crear cuenta
      </p>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> {' | '}
        <Link to="/tienda">Tienda</Link> {' | '}
        <Link to="/login">Ingresar</Link> {' | '}
        <Link to="/registro">Crear cuenta</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Más rutas se agregan después: tienda, registro, cockpit */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
