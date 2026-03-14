import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { toast } from "react-toastify";
import "../styles/Auth.css"


function RegisterPage() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    addressNum: "",
    postalCode: "",
    city: "",
    provincia: "",
    telefono: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await register(form)
      toast.success('Usuario Registrado')
      navigate('/')
    } catch (error) {
      console.log(error);
      
      toast.error(error.message)
    }
  }

  // return (
  //   <form onSubmit={handleSubmit}>

  //     <h2>Registro</h2>

  //     <input
  //       name="firstName"
  //       placeholder="Nombre"
  //       onChange={handleChange}
  //       required
  //     />

  //     <input
  //       name="lastName"
  //       placeholder="Apellido"
  //       onChange={handleChange}
  //       required
  //     />

  //     <input
  //       type="email"
  //       name="email"
  //       placeholder="Email"
  //       onChange={handleChange}
  //       required
  //     />

  //     <input
  //       type="password"
  //       name="password"
  //       placeholder="Contraseña"
  //       onChange={handleChange}
  //       required
  //     />

  //     <input
  //       name="telefono"
  //       placeholder="Teléfono"
  //       onChange={handleChange}
  //     />

  //     <input
  //       name="address"
  //       placeholder="Dirección"
  //       onChange={handleChange}
  //     />

  //     <input
  //       name="addressNum"
  //       placeholder="Número"
  //       onChange={handleChange}
  //     />

  //     <input
  //       name="postalCode"
  //       placeholder="Código Postal"
  //       onChange={handleChange}
  //     />

  //     <input
  //       name="city"
  //       placeholder="Ciudad"
  //       onChange={handleChange}
  //     />

  //     <input
  //       name="provincia"
  //       placeholder="Provincia"
  //       onChange={handleChange}
  //     />

  //     <button type="submit">
  //       Crear cuenta
  //     </button>

  //     <p>
  //       Ya tienes cuenta <Link to="/login">Login</Link>
  //     </p>

  //   </form>
  // );

return (
  <main className="auth-main">
    <section className="auth-card">

      <h2>Crear Cuenta</h2>

      <form onSubmit={handleSubmit} className="auth-form">

        <input
          name="firstName"
          placeholder="Nombre"
          onChange={handleChange}
          required
        />

        <input
          name="lastName"
          placeholder="Apellido"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
          required
        />

        <input
          name="telefono"
          placeholder="Teléfono"
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Dirección"
          onChange={handleChange}
        />

        <input
          name="addressNum"
          placeholder="Número"
          onChange={handleChange}
        />

        <input
          name="postalCode"
          placeholder="Código Postal"
          onChange={handleChange}
        />

        <input
          name="city"
          placeholder="Ciudad"
          onChange={handleChange}
        />

        <input
          name="provincia"
          placeholder="Provincia"
          onChange={handleChange}
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