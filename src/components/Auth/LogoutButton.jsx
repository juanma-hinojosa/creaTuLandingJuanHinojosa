import { useAuth } from "../../context/AuthContext";

function LogoutButton() {
  const { logout } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <button onClick={handleLogout} className="login-button" style={{border:'none'}} >
      Cerrar Sesion
    </button>
  )
}

export default LogoutButton