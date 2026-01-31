import { useState } from "react"
import "../styles/Item.css"

function ItemComponent({prod}) {
  const [cantidad, setCantidad] = useState(1)

  function agregarProducto() {
    setCantidad(cantidad + 1)
  }

  function quitarProducto() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <article className="product-card">
      <figure>
        <img
          src="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw1b8ac003/medium/1002639_1.png"
          alt="Descripción clara del producto"
          loading="lazy"
        />
      </figure>

      <div className="product-content">
        <header>
          {/* <span className="category">Categoría</span> */}
          <h2 className="product-title">Bon o bon de Marajucá 30g</h2>
        </header>

        <div className="price-container">
          <span className="price">${prod.price}</span>

          <div>
            <button onClick={quitarProducto}>-</button>
            <span>{cantidad}</span>
            <button onClick={agregarProducto}>+</button>
          </div>
        </div>
      </div>

      <footer>
        <button type="button" className="btn-add">
          Añadir al carrito
        </button>
      </footer>
    </article>
  )
}

export default ItemComponent