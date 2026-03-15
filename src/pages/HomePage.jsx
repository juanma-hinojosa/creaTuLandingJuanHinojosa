import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"

import { db } from "../service/firebase"

import ImageSwiper from "../components/Home/CaruselSection"
import ItemList from "../components/Home/ItemList"
import ItemImg from "../components/Home/Img"
import ImgList from "../components/Home/ItemImgList"
import ItemListContainer from "../components/Home/ItemListContainer"

import {
  flyersCarrusel,
  flyersCarruselAvisos,
  listaMomentosDulces
} from "../mock/asyncDataCarrusel"
import BannerComponent from "../components/Home/BannerComponent"

function HomePage() {

  const [data, setData] = useState([])
  const [trufas, setTrufas] = useState([])
  const [pascua, setPascua] = useState([])
  const [loading, setLoading] = useState(true)

  const { category } = useParams()

  const getProducts = async (cat = null) => {

    const ref = cat
      ? query(collection(db, "items"), where("category", "==", cat))
      : collection(db, "items")

    const res = await getDocs(ref)

    return res.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  }

  useEffect(() => {

    setLoading(true)

    const loadData = async () => {

      try {
        const products = await getProducts(category)
        setData(products)

        const trufasProducts = await getProducts("trufas")
        setTrufas(trufasProducts)

        const pascuaProducts = await getProducts("pascua")
        setPascua(pascuaProducts)

      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [category])

  return (
    <main>

      <ImageSwiper data={flyersCarrusel} />

      <ItemListContainer tituloSection="Especiales">
        <ItemList data={pascua} loading={loading} />
      </ItemListContainer>


      <ItemListContainer tituloSection="Todos los Momentos Combinan con Cacau Show">
        <h5>Momentos Dulces con Rafaela</h5>

        <div className="products-container">
          {listaMomentosDulces.map((img, index) => (
            <ItemImg key={index} prod={img} />
          ))}
        </div>

      </ItemListContainer>


      <ItemListContainer tituloSection="Nuestra Lineas">
        <h5>Rafaela</h5>
        <ImgList />
      </ItemListContainer>


      <ItemListContainer tituloSection="Pequeños pero Gigantes en Sabor">
        <ItemList data={trufas} loading={loading} />
      </ItemListContainer>


      <ImageSwiper data={flyersCarruselAvisos} />

      <BannerComponent />

    </main>
  )
}

export default HomePage