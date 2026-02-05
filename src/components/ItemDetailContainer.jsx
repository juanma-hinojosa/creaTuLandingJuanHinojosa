import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProduct } from "../mock/asyncData";

function ItemDetailContainer() {
  const [detail, setDetail] = useState({})
  useEffect(() => {
    getOneProduct('04')
      .then((res) => setDetail(res))
      .catch((error) => console.log(error)
      )
  })
  return (
    <section className="section-grid contendor-maximo" >
      <ItemDetail detail={detail}/>
    </section>
  )
}

export default ItemDetailContainer