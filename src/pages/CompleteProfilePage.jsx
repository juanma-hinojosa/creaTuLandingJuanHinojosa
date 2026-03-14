import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css"


function CompleteProfilePage() {

  const { user, completeProfile } = useAuth();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    lastName: "",
    telefono: "",
    address: "",
    addressNum: "",
    postalCode: "",
    city: "",
    provincia: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await completeProfile(user.uid, form);

    navigate("/");

  };

  return (
  <main className="auth-main">

    <section className="auth-card">

      <h2>Completar Perfil</h2>

      <form onSubmit={handleSubmit} className="auth-form">

        <input name="lastName" placeholder="Apellido" onChange={handleChange} />

        <input name="telefono" placeholder="Teléfono" onChange={handleChange} />

        <input name="address" placeholder="Dirección" onChange={handleChange} />

        <input name="addressNum" placeholder="Número" onChange={handleChange} />

        <input name="postalCode" placeholder="Código Postal" onChange={handleChange} />

        <input name="city" placeholder="Ciudad" onChange={handleChange} />

        <input name="provincia" placeholder="Provincia" onChange={handleChange} />

        <button type="submit">
          Guardar
        </button>

      </form>

    </section>

  </main>
);
}

export default CompleteProfilePage;