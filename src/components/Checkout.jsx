import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, serverTimestamp, writeBatch, doc } from "firebase/firestore"
import { db } from "../service/firebase"
import EmptyCart from "./Cart/EmptyCart"
import { Link, Navigate, useLocation } from "react-router-dom"
import OrderConfirmComponent from "./OrderConfirmComponent"
import { useForm } from "react-hook-form"
import FormCheckOutComponent from "./FormCheckoutComponent"



function CheckoutPage() {
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState('')
  const { cart, totalPrice, clear } = useContext(CartContext)
  const { register, handleSubmit, formState: { errors }, getValues } = useForm()

  const location = useLocation()

  if (!location.state?.fromCart) {
    return <Navigate to="/cart" replace />
  }

  const finalizarCompra = async (data) => {
    const { name, lastname, address, email } = data
    setLoading(true)

    const batch = writeBatch(db)

    try {
      // descontar stock
      cart.forEach((product) => {

        const productRef = doc(db, "items", product.id)

        batch.update(productRef, {
          stock: product.stock - product.quantity
        })

      })

      let order = {
        comprador: {
          name,
          lastname,
          address,
          email
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
            <FormCheckOutComponent
              register={register}
              handleSubmit={handleSubmit}
              finalizarCompra={finalizarCompra}
              errors={errors}
              getValues={getValues}
              loading={loading}
            />
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
  }
}