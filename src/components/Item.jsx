import { useState } from "react"
import "../styles/Item.css"
import { Link } from "react-router-dom"
import { toast } from "react-toastify";


function ItemComponent({ prod }) {
  const [cantidad, setCantidad] = useState(1)
  const [comprar, setComprar] = useState(false)

  function agregarProducto() {
    if (cantidad < prod.stock) {
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
      `Agregaste ${cantidad} unidades de ${prod.name} al carrito 🛒`
    )
  }


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
          {prod.stock > 0 && prod.stock <= 5
            ? `Ultimas ${prod.stock} unidades`
            : "Cacau para a Rafa"}
        </span>


        <div className="price-container">
          <span className="price">${prod.price}
            <span style={{ fontSize: "15px", fontWeight: 'normal', color: 'gray' }} >/u</span>
          </span>


          {prod.stock >= 1 && (
            <div>
              <button onClick={quitarProducto} disabled={cantidad === 1} >-</button>
              <span>{cantidad}</span>
              <button onClick={agregarProducto} disabled={cantidad === prod.stock}>+</button>
            </div>
          )}

        </div>
      </div>

      <footer>
        <button type="button" onClick={() => onAdd(cantidad)}
          disabled={prod.stock === 0} className="btn-add" style={{ cursor: 'pointer' }}>
          {prod.stock === 0 ? "Sin stock" : "Añadir al carrito"}
        </button>
      </footer>
    </article>
  )
}

export default ItemComponent