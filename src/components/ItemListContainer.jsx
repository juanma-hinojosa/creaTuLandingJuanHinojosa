import { useEffect, useState } from "react"
import "../styles/ItemListContainer.css"
import ItemList from "./ItemList"
import { getProducs } from "../mock/asyncData"

function ItemListContainer(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    getProducs()
      .then((res) => setData(res))
      .catch((error) => console.error(error))
  }, [])

  return (
    <section className="section-grid contendor-maximo">
      <h2 className="titulo">{props.tituloSection}</h2>

        <ItemList data={data} />
    </section>
  )
}

export default ItemListContainer
