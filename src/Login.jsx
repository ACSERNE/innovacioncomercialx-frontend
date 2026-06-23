import { useState } from 'react'
import { apiPost } from './api'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMsg('Procesando...')

    try {
      const res = await apiPost('/auth/login', { correo: email, password })
      localStorage.setItem('cx_token', res.token)
      setMsg('Ingreso exitoso')
    } catch (err) {
      setMsg('Error: ' + err.message)
    }
  }

  return (
    <div>
      <h2>Ingresar</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
      <p>{msg}</p>
    </div>
  )
}

export default Login
