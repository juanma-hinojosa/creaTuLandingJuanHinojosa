import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProduct } from "../mock/asyncData";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

function ItemDetailContainer() {
  const [detail, setDetail] = useState({})
  const { id } = useParams()
  // console.log(id);

  useEffect(() => {
    const prodRef = doc(db, 'items', id)

     getDoc(prodRef)
      .then((res) => {
        if (res.exists()) {
          setDetail({ id: res.id, ...res.data() })
        } else {
          setDetail(null)
        }
      })
      .catch((error) => console.log(error))
  }, [id])

  // useEffect(() => {
  //   getOneProduct(id)
  //     .then((res) => setDetail(res))
  //     .catch((error) => console.log(error))
  // }, [id])

  return (
    <main>
      <section className="section-grid contendor-maximo" >
        {/* <ItemDetail detail={detail} /> */}

        {
          detail
            ? <ItemDetail detail={detail} />
            : <h1>Producto no encontrado</h1>
        }
      </section>
    </main>
  )
}

export default ItemDetailContainer