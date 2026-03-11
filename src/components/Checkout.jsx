import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
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

  const finalizarCompra = (data) => {
    const { name, lastname, address, email } = data
    setLoading(true)

    let order = {
      // Comprador es el objeto con los datos del comprador
      comprador: {
        name, lastname, address, email
      },
      compras: cart,
      total: totalPrice(),
      fecha: serverTimestamp()
    }
    // Creamos Ref
    const orderColl = collection(db, 'orders')

    // Agregamos el doc
    addDoc(orderColl, order)
      .then((res) => {
        setOrderId(res.id)
        // Borramos el carrito
        clear()
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
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