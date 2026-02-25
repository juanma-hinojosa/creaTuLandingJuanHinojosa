import { useContext } from "react"
import CartView from "./CartView"
import EmptyCart from "./EmptyCart"
import { CartContext } from "../../context/CartContext"

function CartContainer() {
  const { cart } = useContext(CartContext)
  return (
    <main
      style={{ minHeight: '100vh', padding: '40px 20px' }}
    >
      {cart.length > 0 ? <CartView /> : <EmptyCart />}
    </main>
  )
}

export default CartContainer