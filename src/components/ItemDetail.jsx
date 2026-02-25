import { useContext, useState } from "react"
import "../styles/ItemDetail.css"
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext";

function ItemDetail({ detail }) {
  const [cantidad, setCantidad] = useState(1)
  const [comprar, setComprar] = useState(false)

  const [purchase, setPurchase] = useState(false)
  const { cart, addItem, itemQty } = useContext(CartContext)

  console.log(cart);


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

  const onAdd = (cantidad) => {
    toast.success(
      `Agregaste ${cantidad} unidades de ${detail.name}`
    )
    addItem(detail, cantidad)
    setPurchase(true)
  }

  const resumen = detail.description?.find(d => d.resumen)?.resumen
  const detalles = detail.description?.find(d => d.detalles)?.detalles || []

  const stockActualizado = detail.stock - itemQty(detail.id)


  if (!detail.id) return <p>Cargando...</p>

  return (

    <>
      <figure className="item-detail">
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

        <article>
          <h2>{detail.name}</h2>
          <h3 style={{ fontSize: "15px", fontWeight: 'normal', color: 'gray', textTransform: 'capitalize' }} >{detail.category}</h3>
          <p style={{ margin: '40px 0' }} className="resumen-desk">{resumen}</p>

          <div className="price-container">
            <span className="price">${detail.price}
              <span style={{ fontSize: "15px", fontWeight: 'normal', color: 'gray' }} >/u</span>
            </span>


            {stockActualizado >= 1 && (
              <div>
                <button style={{ backgroundColor: 'white', color: 'cornflowerblue', border: 'none', fontSize: '25px' }} onClick={quitarProducto} disabled={cantidad === 1} >-</button>
                <span>{cantidad}</span>
                <button style={{ backgroundColor: 'white', color: 'cornflowerblue', border: 'none', fontSize: '25px' }} onClick={agregarProducto} disabled={cantidad === stockActualizado}>+</button>
              </div>
            )}

          </div>

          <footer>
            <button type="button" onClick={() => onAdd(cantidad)} disabled={stockActualizado === 0} className="btn-add" style={{ cursor: 'pointer' }}>
              {stockActualizado === 0 ? "Sin stock" : "Añadir al carrito"}
            </button>
          </footer>

          <span
            style={{
              backgroundColor: "#9c2423",
              color: "white",
              padding: "2px 8px",
              borderRadius: "15px",
              alignContent: 'center'
            }}
          >
            {stockActualizado > 0 && stockActualizado <= 5
              ? `Ultimas ${stockActualizado} unidades`
              : "Cacau para a Rafa"}

            {/* <Icon icon="mdi:seed-outline" width="24" height="24" /> */}
          </span>

        </article>
      </figure>


      {
        detalles.length > 0 && (
          <>
            <h4>Detalles</h4>
            <p style={{ margin: '40px 0' }} >{resumen}</p>

            <ul style={{ listStyle: "none" }} >
              {detalles.map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
            </ul>
          </>
        )
      }
    </>
  )
}


export default ItemDetail