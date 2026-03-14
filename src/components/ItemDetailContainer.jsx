import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProduct } from "../mock/asyncData";
import { Link, useLocation, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

function ItemDetailContainer() {
  const [detail, setDetail] = useState({})
  const { id } = useParams()
  const location = useLocation()
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


  return (
    <main>
      <section className="section-grid contendor-maximo" >

        <div style={styles.breadcrum}>
          <Link to="/" style={styles.breadcrumLink} >Inicio</Link> /
          {detail?.category && (
            <>
              <Link to={`/category/${detail.category}`} style={styles.breadcrumLink}>
                {detail.category}
              </Link> /
            </>
          )}
          <span>{detail?.name}</span>
        </div>


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

const styles = {
  breadcrum: {
    textTransform:'Capitalize',
    marginBottom:'20px'
  },
  breadcrumLink: {
    textDecoration:'transparent',
    color:'black'
  }
}