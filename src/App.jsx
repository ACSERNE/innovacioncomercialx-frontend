import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import './App.css'

function Home() {
  return (
    <div>
      <h1>Bienvenido a ComercialX</h1>
      <p>Inicio | Tienda | Ingresar | Crear cuenta</p>
    </div>
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
