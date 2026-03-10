import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

function OrderConfirmComponent(props) {
  return (
    <section className="contendor-maximo">

      <div style={styles.contenedorOrderConfirm} >
        {/* <Icon icon="ei:check" style={styles.iconoCheck} /> */}
        <Icon icon="bi:cart-check" style={styles.iconoCheck} />
        <h2>Compra Realizada con exito</h2>
        <span style={styles.numeroOrden} >Numero de orden: {props.orderId}</span>
        <Link style={styles.linkInicio} to='/'>Ver mas productos</Link>
      </div>

    </section>
  )
}

const styles = {
  contenedorOrderConfirm: {
    display: 'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  iconoCheck: {
    fontSize: '140px',
    marginBottom: '50px',
    // color:'#642222'
  },
  numeroOrden: {
    // color: '#0005',
    marginBottom: '10px',
  },
  linkInicio: {
    textDecoration: 'none'
  }
}

export default OrderConfirmComponent