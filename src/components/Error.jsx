import { Link } from 'react-router-dom'
import ImageError from "/error.png"
const Error = () => {

  return (
   <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <img src={ImageError} alt='error'/>
        <Link className='btn btn-dark' to='/'>Volver a Home</Link>
    </div>
  )
}

export default Error