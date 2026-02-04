import { Children, useEffect, useState } from "react"
import "../styles/ItemListContainer.css"
import ItemList from "./ItemList"
import { getProducs } from "../mock/asyncData"

function ItemListContainer({tituloSection, children}) {
  const [data, setData] = useState([])

  useEffect(() => {
    getProducs()
      .then((res) => setData(res))
      .catch((error) => console.error(error))
  }, [])

  return (
    <section className="section-grid contendor-maximo">
      <h2 className="titulo">{tituloSection}</h2>

        {/* <ItemList data={data} /> */}
        {children}
    </section>
  )
}

export default ItemListContainer
