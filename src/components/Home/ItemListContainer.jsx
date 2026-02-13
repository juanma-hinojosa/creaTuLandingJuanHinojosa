import { Children, useEffect, useState } from "react"
import "../../styles/ItemListContainer.css"
import { getProducs } from "../../mock/asyncData"
import { useParams } from "react-router-dom"

function ItemListContainer({ tituloSection, children }) {
  const [data, setData] = useState([])
  const { type } = useParams()

  useEffect(() => {
    getProducs()
      .then((res) => {
        if (type) {
          setData(res.filter((prod) => prod.category === type))
        } else {
          setData(res)

        }
        // setData(res)
      })
      .catch((error) => console.error(error))
  }, [type])

  return (
    <section className="section-grid contendor-maximo">
      <h2 className="titulo">{tituloSection}</h2>

      {/* <ItemList data={data} /> */}
      {children}
    </section>
  )
}

export default ItemListContainer
