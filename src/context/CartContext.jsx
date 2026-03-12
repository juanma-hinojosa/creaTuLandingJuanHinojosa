import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoLS)

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cart))
  }, [cart])

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

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id))
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

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

  const valorEntrega = () => {
    const total = totalPrice()
    if (total > 150000) {
      return 0
    } else {
      return 15000
    }
  }

  const valorServicioPlataforma = () => {
    return 2000
  }

  const precioFinal = () => {
    return totalPrice() + valorEntrega() + valorServicioPlataforma()
  }

  return (
    <CartContext.Provider value={{ cart, addItem, clear, removeItem, itemQty, totalQuantity, totalPrice, valorEntrega, valorServicioPlataforma, precioFinal }}>
      {children}
    </CartContext.Provider>
  )
}