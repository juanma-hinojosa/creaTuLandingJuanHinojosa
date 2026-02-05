import { useState } from "react"
import "../styles/ItemDetail.css"

function ItemDetail({ detail }) {
  const [cantidad, setCantidad] = useState(1)
  const [comprar, setComprar] = useState(false)

  function agregarProducto() {
    if (cantidad < detail.stock) {
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

  const resumen = detail.description?.find(d => d.resumen)?.resumen
  const detalles = detail.description?.find(d => d.detalles)?.detalles || []


  if (!detail.id) return <p>Cargando...</p>

  return (
    <figure className="item-detail" >
      <figcaption
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: '4px',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <img src={detail.img} alt={`Descripcion ${detail.name}`} />
      </figcaption>

      <h2>{detail.name}</h2>
      <h3 style={{ fontSize: "15px", fontWeight: 'normal', color: 'gray' }} >{detail.category}</h3>

      <div className="price-container">
        <span className="price">${detail.price}
          <span style={{ fontSize: "15px", fontWeight: 'normal', color: 'gray' }} >/u</span>
        </span>


        {detail.stock >= 1 && (
          <div>
            <button onClick={quitarProducto} disabled={cantidad === 1} >-</button>
            <span>{cantidad}</span>
            <button onClick={agregarProducto} disabled={cantidad === detail.stock}>+</button>
          </div>
        )}

      </div>

      <footer>
        <button type="button" onClick={shop} disabled={detail.stock === 0} className="btn-add">
          {detail.stock === 0 ? "Sin stock" : "Añadir al carrito"}
        </button>
      </footer>

      <span
        style={{
          backgroundColor: "#9c2423",
          color: "white",
          padding: "2px 8px",
          borderRadius: "15px",
        }}
      >
        {detail.stock > 0 && detail.stock <= 5
          ? `Ultimas ${detail.stock} unidades`
          : "Cacau para a Rafa"}
      </span>

      <p style={{margin:'40px 0'}} >{resumen}</p>

      {detalles.length > 0 && (
        <>
          <h4>Detalles</h4>
          <ul style={{listStyle:"none"}} >
            {detalles.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </>
      )}


      {/* <p>{detail.description.resumen}</p> */}
      {/* <p>Stock: {detail.stock} unidades disponibles</p> */}
    </figure>
  )
}


export default ItemDetail