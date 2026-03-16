import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, serverTimestamp, writeBatch, doc } from "firebase/firestore"
import { db } from "../service/firebase"
import EmptyCart from "./Cart/EmptyCart"
import { Navigate, useLocation } from "react-router-dom"
import OrderConfirmComponent from "./OrderConfirmComponent"
import { useAuth } from "../context/AuthContext"
import CheckoutSummaryComponent from "./Cart/CheckoutSummary"

function CheckoutPage() {
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState('')

  const { cart, totalPrice, clear } = useContext(CartContext)
  const { user, profile } = useAuth()

  const location = useLocation()

  if (!location.state?.fromCart) {
    return <Navigate to="/cart" replace />
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: "/checkout" }} replace />
  }

  const finalizarCompra = async () => {
    setLoading(true)
    const batch = writeBatch(db)

    try {
      cart.forEach((product) => {
        const productRef = doc(db, "items", product.id)
        batch.update(productRef, {
          stock: product.stock - product.quantity
        })
      })

      const order = {
        comprador: {
          uid: user.uid,
          email: user.email,
          firstName: profile?.firstName,
          lastName: profile?.lastName,
          telefono: profile?.telefono,
          address: profile?.address,
          addressNum: profile?.addressNum,
          postalCode: profile?.postalCode,
          city: profile?.city,
          provincia: profile?.provincia
        },
        compras: cart,
        total: totalPrice(),
        fecha: serverTimestamp()
      }

      const orderRef = doc(collection(db, "orders"))
      batch.set(orderRef, order)
      await batch.commit()
      setOrderId(orderRef.id)
      clear()
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  if (!cart.length && !orderId) {
    return (
      <main style={{ minHeight: '100vh', padding: '40px 20px' }}>
        <EmptyCart />
      </main>
    )
  }

  return (
    <main style={styles.mainStyles}>
      <section className="contendor-maximo">

        {
          orderId
            ?
            <OrderConfirmComponent orderId={orderId} />
            :
            <>
              <CheckoutSummaryComponent />
              <button style={styles.loginButton}  onClick={finalizarCompra} disabled={loading}>
                {loading ? "Procesando compra..." : "Confirmar compra"}
              </button>
            </>

        }

      </section>
    </main>
  )
}

export default CheckoutPage

const styles = {
  mainStyles: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  loginButton: {
    marginTop:'30px',
    border:'none',
    textDecoration: "none",
    backgroundColor: "rgb(162, 101, 73)",
    padding: "15px 20px",
    borderRadius: "5px",
    color: "rgb(231, 231, 231)",
    fontWeight: 600,
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    cursor:'pointer'
  }
}