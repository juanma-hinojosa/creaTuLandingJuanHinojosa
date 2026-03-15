import { Icon } from "@iconify/react";
import { useAuth } from "../../context/AuthContext";

function LogoutButton() {
  const { logout } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <button onClick={handleLogout} className="login-button" style={{border:'none'}} >
      Salir  <Icon icon="material-symbols:logout" width="15px" />
    </button>
  )
}

export default LogoutButton