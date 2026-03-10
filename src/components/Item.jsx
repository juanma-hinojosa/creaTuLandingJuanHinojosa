import { useContext, useState } from "react"
import "../styles/Item.css"
import { Link } from "react-router-dom"
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext";

function ItemComponent({ prod }) {
  const [cantidad, setCantidad] = useState(1)
  const [comprar, setComprar] = useState(false)

  const [purchase, setPurchase] = useState(false)
  const { cart, addItem, itemQty } = useContext(CartContext)

  function agregarProducto() {
    if (cantidad < stockActualizado) {
      setCantidad(cantidad + 1)
    }
  }

  function quitarProducto() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  const onAdd = (cantidad) => {
    toast.success(
      `Agregaste ${cantidad} unidades de ${prod.name}`
    )
    addItem(prod, cantidad)
    setCantidad(1)
    setPurchase(true)
  }

  const stockActualizado = prod.stock - itemQty(prod.id)

  return (
    <article className="product-card">
      <figure>
        <img
          src={prod.img}
          alt={`Descripcion ${prod.name}`}
          loading="lazy"
        />
      </figure>

      <div className="product-content">
        <header>
          {/* <span className="category">Categoría</span> */}
          <h2 className="product-title">
            <Link to={`/item/${prod.id}`} className="product-title" style={{ textDecoration: 'none', color: '#141414' }}>
              {prod.name}
            </Link>
          </h2>
        </header>


        <span
          style={{
            backgroundColor: "#9c2423",
            color: "white",
            padding: "2px 8px",
            borderRadius: "15px",
          }}
        >
          {stockActualizado > 0 && stockActualizado <= 5
            ? `Ultimas ${stockActualizado} unidades`
            : "Cacau para a Rafa"}
        </span>


        <div className="price-container">
          <span className="price">${prod.price}
            <span style={{ fontSize: "15px", fontWeight: 'normal', color: 'gray' }} >/u</span>
          </span>


          {stockActualizado >= 1 && (
            <div>
              <button onClick={quitarProducto} disabled={cantidad === 1} >-</button>
              <span>{cantidad}</span>
              <button onClick={agregarProducto} disabled={cantidad === stockActualizado}>+</button>
            </div>
          )}

        </div>
      </div>

      <footer>
        <button type="button" onClick={() => onAdd(cantidad)}
          disabled={stockActualizado === 0} className="btn-add" style={{ cursor: 'pointer' }}>
          {stockActualizado === 0 ? "Sin stock" : "Añadir al carrito"}
        </button>
      </footer>
    </article>
  )
}

export default ItemComponent