import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../service/firebase"
import EmptyCart from "./Cart/EmptyCart"
import { Link, Navigate, useLocation } from "react-router-dom"
import OrderConfirmComponent from "./OrderConfirmComponent"
import { useForm } from "react-hook-form"



function CheckoutPage() {
  const [buyer, setBuyer] = useState({})
  const [validMail, setValidMail] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState('')
  const { cart, totalPrice, clear } = useContext(CartContext)

  const location = useLocation()
  if (!location.state?.fromCart) {
    return <Navigate to="/cart" replace />
  }

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  const finalizarCompra = (e) => {
    e.preventDefault() //Esto sirve para que no recargue todo

    if (!buyer.name || !buyer.lastname || !buyer.address || !buyer.email || !validMail) {
      setError('Por favor complete todos los datos')
    } else if (buyer.email !== validMail) {
      setError('Los campos no coinciden')
    } else {
      setLoading(true)
      setError(null)

      let order = {
        comprador: buyer,
        compras: cart,
        total: totalPrice(),
        fecha: serverTimestamp()
      }

      // Creamos la referencia
      const orderColl = collection(db, 'orders')

      // Agregamos el Documento de la compra 
      // Con los items y los datos del comprador

      addDoc(orderColl, order)
        .then((res) => {
          setOrderId(res.id)

          // Despues de setear la orden vaciamos el carrito
          clear()
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
  }

  if (!cart.length && !orderId) {
    return (
      <main
        style={{ minHeight: '100vh', padding: '40px 20px' }}
      >
        <EmptyCart />
      </main>
    )
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <section className="contendor-maximo">

        {
          orderId
            ?
            <OrderConfirmComponent
              orderId={orderId}
            />
            :
            <div
              style={{ maxWidth: '700px', padding: '20px' }}
            >
              <div style={{ padding: '20px', backgroundColor: '#f3f2f2', border: '1px solid #eeeded', borderRadius: '4px', maxWidth: '500px' }} >
                <h1 style={{ color: '#6e2b2b', letterSpacing: '0px' }} >Completa los campos</h1>
                {/* {error && <span style={{ color: 'red', fontWeight: 'bold' }}>{error}</span>} */}
                <form
                  onSubmit={finalizarCompra}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '10px'
                  }}
                >
                  <input name='name' placeholder='Ingrese su nombre' style={styles.input} type="text" onChange={buyerData} />
                  <input name='lastname' placeholder='Ingrese su apellido' style={styles.input} type="text" onChange={buyerData} />
                  <input name='address' placeholder='Ingrese su dirección' style={styles.input} type="text" onChange={buyerData} />
                  <input name='email' placeholder='Ingrese su correo' style={styles.input} type='email' onChange={buyerData} />
                  <input name='secondemail' placeholder='Repita su correo' style={styles.input} type="email" onChange={(e) => setValidMail(e.target.value)} />

                  <button type='submit' style={styles.button} disabled={loading} >{loading ? 'Procesando Compra...' : 'Generar Orden'}</button>
                </form>
                {error && <span style={{ color: 'red', fontWeight: 'bold' }}>{error}</span>}
              </div>
            </div>

        }
      </section>
    </main>
  )
}

const styles = {
  input: {
    padding: '15px',
    borderRadius: '4px',
    border: '1px solid #e2e2e2',
    backgroundColor: 'white',
    color: 'black'
  },
  button: {
    backgroundColor: "#72ab59",
    padding: '15px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '15px'
  }
}

export default CheckoutPage