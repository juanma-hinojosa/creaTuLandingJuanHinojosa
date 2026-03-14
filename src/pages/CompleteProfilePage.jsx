import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css"
import { useForm } from "react-hook-form";


function CompleteProfilePage() {
  const { user, completeProfile } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    await completeProfile(user.uid, data)
    navigate('/')
  }


  return (
    <main className="auth-main">
      <section className="auth-card">
        <h2>Completar Perfil</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <input placeholder="Apellido" {...register("lastName")} />
          <input placeholder="Teléfono" {...register("telefono")} />
          <input placeholder="Dirección" {...register("address")} />
          <input placeholder="Número" {...register("addressNum")} />
          <input placeholder="Código Postal" {...register("postalCode")} />
          <input placeholder="Ciudad" {...register("city")} />
          <input placeholder="Provincia" {...register("provincia")} />

          <button type="submit">
            Guardar
          </button>
        </form>
      </section>
    </main>
  );
}

export default CompleteProfilePage;