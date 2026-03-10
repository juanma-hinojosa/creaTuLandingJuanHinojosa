import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducs } from "../mock/asyncData"
import ItemList from "./ItemList"
import ItemSkeleton from "./ItemSkeleton"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

function ItemListContainer(props) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const { type } = useParams()

  useEffect(() => {
    setLoading(true)
    const prodColl = type ? query(collection(db, 'items'), where('category', '==', type)) : collection(db, 'items')

    getDocs(prodColl)
      .then((res => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        // console.log(list);
        setData(list)
      }))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [type])

  // console.log(type)

  return (
    <main>
      <section className="section-grid contendor-maximo">
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