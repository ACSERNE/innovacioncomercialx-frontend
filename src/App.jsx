import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import './App.css'

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
    <HashRouter>
      <nav>
        <Link to="/">Inicio</Link> {' | '}
        <Link to="/tienda">Tienda</Link> {' | '}
        <Link to="/login">Ingresar</Link> {' | '}
        <Link to="/registro">Crear cuenta</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* luego agregamos registro, tienda, cockpit */}
      </Routes>
    </HashRouter>
  )
}

export default App
