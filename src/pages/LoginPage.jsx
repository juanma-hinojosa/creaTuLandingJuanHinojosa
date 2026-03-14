import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useState } from "react"
import { toast } from "react-toastify"
import GoogleLogin from "../components/Auth/GoogleLogin"
import "../styles/Auth.css"

function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password)
      toast.success('Login Exitoso')
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <main className="auth-main">
      <section className="auth-card">

        <h3>Login</h3>

        <form onSubmit={handleSubmit} className="auth-form">

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Entrar</button>

          <p>
            Nuevo Usuario <Link to="/registrarse">Registrarse</Link>
          </p>

          <GoogleLogin />

        </form>

      </section>
    </main>
  )
}

export default LoginPage



