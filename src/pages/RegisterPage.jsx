import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { toast } from "react-toastify";
import "../styles/Auth.css"
import { useForm } from "react-hook-form";


function RegisterPage() {
  const { register: registerUser } = useAuth()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      await registerUser(data)
      toast.success('Usuario Registrado')
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <main className="auth-main">

      <section className="auth-card">

        <h2>Crear Cuenta</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">

          <input
            placeholder="Nombre"
            {...register("firstName", { required: "El nombre es obligatorio" })}
          />

          <input
            placeholder="Apellido"
            {...register("lastName", { required: "El apellido es obligatorio" })}
          />

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "El email es obligatorio" })}
          />

          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "Mínimo 6 caracteres"
              }
            })}
          />

          <input
            placeholder="Teléfono"
            type="number"
            {...register("telefono")}
          />

          <input
            placeholder="Dirección"
            {...register("address")}
          />

          <input
            placeholder="Número"
            {...register("addressNum")}
          />

          <input
            placeholder="Código Postal"
            {...register("postalCode")}
          />

          <input
            placeholder="Ciudad"
            {...register("city")}
          />

          <input
            placeholder="Provincia"
            {...register("provincia")}
          />

          <button type="submit">
            Crear cuenta
          </button>

          <p>
            Ya tienes cuenta <Link to="/login">Login</Link>
          </p>

        </form>

      </section>

    </main>
  );
}

export default RegisterPage