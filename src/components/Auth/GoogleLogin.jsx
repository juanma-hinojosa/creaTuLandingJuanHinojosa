import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ButtonGoogle from '/google.png'

function GoogleLogin() {
  const { googleLogin } = useAuth()
  const navigate = useNavigate()

  const handleGoogle = async () => {
    try {
      const result = await googleLogin();

      if (result.isNewUser) {
        navigate("/complete-profile");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <button onClick={handleGoogle} style={styles.backgroundButton} >
      {/* Continuar con Google */}
      <img style={styles.img}  src={ButtonGoogle} alt="Login Google" />
    </button>
  )
}

export default GoogleLogin

const styles = {
  backgroundButton: {
    width: '200px',
    backgroundColor: 'white',
    border: 'none',
    padding: '0'
  },
  img: {
    // height: '20px',
    width: '100%'
  }
}