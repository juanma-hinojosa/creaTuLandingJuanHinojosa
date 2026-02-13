import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProduct } from "../mock/asyncData";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [detail, setDetail] = useState({})
  const { id } = useParams()
  console.log(id);


  useEffect(() => {
    getOneProduct(id)
      .then((res) => setDetail(res))
      .catch((error) => console.log(error))
  }, [id])

  return (
    <main>
      <section className="section-grid contendor-maximo" >
        <ItemDetail detail={detail} />
      </section>
    </main>
  )
}

export default ItemDetailContainer