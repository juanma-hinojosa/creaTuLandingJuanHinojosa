import { useState } from "react";

function ItemCount(props) {
  const [count, setCount] = useState(1)
  const [comprar, setComprar] = useState(false)

  const agregarCarrito = () => {
    if (count < props.stock) {
      setCount(count + 1)
    }
  }
  const quitarDeCarrito = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const shop = () => {
    setComprar(!comprar)
  }

  return
}