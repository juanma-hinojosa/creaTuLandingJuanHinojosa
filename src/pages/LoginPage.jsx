import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useState } from "react"
import { toast } from "react-toastify"
import GoogleLogin from "../components/Auth/GoogleLogin"
import "../styles/Auth.css"
import { useForm } from "react-hook-form"

function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password)
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

        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "El email es obligatorio" })}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "La contraseña es obligatoria" })}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <button type="submit">
            Entrar
          </button>

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



