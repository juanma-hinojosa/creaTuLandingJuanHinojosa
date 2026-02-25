import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) => {
          if (item.id === prod.id) {
            return { ...prod, quantity: prod.quantity + qty }
          } else {
            return prod
          }
        })
      )
    } else {
      setCart([...cart, { ...item, quantity: qty }])
    }
  }

  const clear = () => {
    setCart([])
  }

  // const removeItem = (id) => {
  //   return setCart.filter((prod) => prod.id !== id)
  // }

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id))
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  //OPCIONAL
  const itemQty = (id) => {
    const itemIn = cart.find((prod) => prod.id === id)
    if (itemIn) {
      return itemIn.quantity
    } else {
      return 0
    }
  }

  const totalQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0)
  }

  const totalPrice = () => {
  return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
}

  return (
    <CartContext.Provider value={{ cart, addItem, clear, removeItem, itemQty, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}