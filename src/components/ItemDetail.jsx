import { useContext, useState } from "react"
import "../styles/ItemDetail.css"
import { toast } from "react-toastify"
import { CartContext } from "../context/CartContext"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../service/firebase"
import { productos } from "../mock/asyncData"

function ItemDetail({ detail }) {
  const [cantidad, setCantidad] = useState(1)
  const { cart, addItem, itemQty } = useContext(CartContext)

  const isLoading = !detail?.id

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
    toast.success(`Agregaste ${cantidad} unidades de ${detail.name}`)
    addItem(detail, cantidad)
    setCantidad(1)
  }

  const resumen = detail?.description?.find(d => d.resumen)?.resumen
  const detalles = detail?.description?.find(d => d.detalles)?.detalles || []

  const stockActualizado = detail?.stock
    ? detail.stock - itemQty(detail.id)
    : 0

  // const subirProd = () => {
  //   console.log('SUBIENDO DATA...')
  //   const collASubir = collection(db, "items")
  //   productos.map((prod) => addDoc(collASubir, prod))
  // }

  return (
    <>
      <figure className="item-detail">


        {/* <button onClick={subirProd}>SUBIR DATA</button> */}

        <figcaption
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            padding: '50px'
          }}
        >
          {isLoading ? (
            <Skeleton height="100%" width="100%" />
          ) : (
            <img
              src={detail.img}
              alt={`Descripcion ${detail.name}`}
              style={{ width: "100%" }}
            />
          )}
        </figcaption>

        <article>
          <h2>
            {isLoading ? <Skeleton width={250} /> : detail.name}
          </h2>

          <h3
            style={{
              fontSize: "15px",
              fontWeight: "normal",
              color: "gray",
              textTransform: "capitalize"
            }}
          >
            {isLoading ? <Skeleton width={120} /> : detail.category}
          </h3>

          <p style={{ margin: "40px 0" }} className="resumen-desk">
            {isLoading ? <Skeleton count={3} /> : resumen}
          </p>

          <div className="price-container">
            <span className="price">
              {isLoading ? (
                <Skeleton width={100} />
              ) : (
                <>
                  ${detail.price}
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "normal",
                      color: "gray"
                    }}
                  >
                    {" "}
                    /u
                  </span>
                </>
              )}
            </span>

            {!isLoading && stockActualizado >= 1 && (
              <div>
                <button
                  onClick={quitarProducto}
                  disabled={cantidad === 1}
                >
                  -
                </button>

                <span style={{ margin: "0 10px" }}>
                  {cantidad}
                </span>

                <button
                  onClick={agregarProducto}
                  disabled={cantidad === stockActualizado}
                >
                  +
                </button>
              </div>
            )}
          </div>

          <footer style={{ marginTop: "20px" }}>
            {isLoading ? (
              <Skeleton height={40} width={200} />
            ) : (
              <button
                type="button"
                onClick={() => onAdd(cantidad)}
                disabled={stockActualizado === 0}
                className="btn-add"
                style={{ cursor: 'pointer' }}
              >
                {stockActualizado === 0
                  ? "Sin stock"
                  : "Añadir al carrito"}
              </button>
            )}
          </footer>

          {!isLoading && (
            <span
              style={{
                backgroundColor: "#9c2423",
                color: "white",
                padding: "2px 8px",
                borderRadius: "15px",
                display: "inline-block",
                marginTop: "15px"
              }}
            >
              {stockActualizado > 0 && stockActualizado <= 5
                ? `Últimas ${stockActualizado} unidades`
                : "Cacau para a Rafa"}
            </span>
          )}
        </article>
      </figure>

      {/* DETALLES */}
      <section style={{ marginTop: "40px" }}>
        <h4>
          {isLoading ? <Skeleton width={120} /> : "Detalles"}
        </h4>

        <p style={{ margin: "20px 0" }}>
          {isLoading ? <Skeleton count={2} /> : resumen}
        </p>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {isLoading
            ? Array(4).fill().map((_, i) => (
              <li key={i}>
                <Skeleton />
              </li>
            ))
            : detalles.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
        </ul>
      </section>
    </>
  )
}

export default ItemDetail