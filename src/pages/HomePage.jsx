import { useEffect, useState } from "react"
import ImageSwiper from "../components/Home/CaruselSection"
import ItemList from "../components/Home/ItemList"
import { flyersCarrusel, flyersCarruselAvisos, listaMomentosDulces } from "../mock/asyncDataCarrusel"
import ItemImg from "../components/Home/Img"
import { getProducs } from "../mock/asyncData"
import ImgList from "../components/Home/ItemImgList"
import ItemListContainer from "../components/Home/ItemListContainer"

function HomePage() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    getProducs()
      .then(res => setData(res))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <main>
      <ImageSwiper data={flyersCarrusel} />

      <ItemListContainer
        tituloSection="Especiales"
      >
        <ItemList data={data} loading={loading} />
      </ItemListContainer>


      <ItemListContainer tituloSection='Todos los Momentos Combinan con Cacau Show' >
        <h5>Momentos Dulces con Rafaela</h5>

        <div className="products-container">
          {listaMomentosDulces.map((img, index) => <ItemImg key={index} prod={img} />)}
        </div>
      </ItemListContainer>

      <ItemListContainer tituloSection="Nuestra Lineas">
        <h5>Rafaela</h5>

        <ImgList />
      </ItemListContainer>

      <ItemListContainer
        tituloSection="Pequeños pero Gigantes en Sabor"
      >
        <ItemList data={data} loading={loading} />
      </ItemListContainer>


      <ImageSwiper data={flyersCarruselAvisos} />

      {/* <ItemDetailContainer /> */}
    </main>
  )
}

export default HomePage