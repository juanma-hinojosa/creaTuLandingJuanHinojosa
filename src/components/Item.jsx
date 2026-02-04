import { useState } from "react"
import "../styles/Item.css"

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

  const shop = () => {
    setComprar(!comprar)
  }



  return (
    <article className="product-card">
      <figure>
        <img
          src={prod.img}
          alt="Descripción clara del producto"
          loading="lazy"
        />
      </figure>

      <div className="product-content">
        <header>
          {/* <span className="category">Categoría</span> */}
          <h2 className="product-title">{prod.name}</h2>
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
        <button type="button" onClick={shop} disabled={prod.stock === 0} className="btn-add">
          {prod.stock === 0 ? "Sin stock" : "Añadir al carrito"}
        </button>
      </footer>
    </article>
  )
}

export default ItemComponent