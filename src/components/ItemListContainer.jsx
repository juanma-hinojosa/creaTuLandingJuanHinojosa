import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducs } from "../mock/asyncData"
import ItemList from "./ItemList"
import ItemSkeleton from "./ItemSkeleton"

function ItemListContainer(props) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const { type } = useParams()

  useEffect(() => {
    setLoading(true)
    getProducs()
      .then((res) => {
        if (type) {
          setData(res.filter((prod) => prod.category === type))
        } else {
          setData(res)
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [type])

  console.log(type)

  return (
    <main>
      <section className="section-grid contendor-maximo">
        {/* <h2 className="titulo">{tituloSection}</h2>  */}
        {props.tituloSection}{type && <span style={{ textTransform: 'capitalize', fontSize: '2rem', color: 'rgb(162, 101, 73)' }}>{type}</span>}
        {loading ? (
          // <p>Cargando productos...</p>  // 👈 texto de carga
          <div
            style={{
              
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            }}
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <ItemSkeleton key={index} />
            ))}
          </div>
        ) : (
          <ItemList data={data} />
        )}
      </section>
    </main>

  )
}

export default ItemListContainer