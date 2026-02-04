import { useEffect, useState } from 'react'
import './App.css'
import CardComponent from './components/CardComponent'
import ImageSwiper from './components/CaruselSection'
import ItemList from './components/ItemList'
import ItemListContainer from './components/ItemListContainer'
import NavbarComponent from './components/NavbarComponent'
import { flyersCarrusel, flyersCarruselAvisos } from './mock/asyncDataCarrusel'
import { getProducs } from './mock/asyncData'
import ImgList from './components/ItemImgList'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getProducs()
      .then(res => setData(res))
      .catch(console.error)
  }, [])
  return (
    <>
      <header>
        <NavbarComponent />
      </header>

      <main>

        <ImageSwiper data={flyersCarrusel} />

        <ItemListContainer
          tituloSection="Especiales"
        >
          <ItemList data={data} />
        </ItemListContainer>


        <ItemListContainer tituloSection="Linea de Clasicos">
          <h5>Rafaela</h5>

          <ImgList />
        </ItemListContainer>

         <ItemListContainer
          tituloSection="Todos los Momentos van de la mano con Cacau Show"
        >
          <ItemList data={data} />
        </ItemListContainer>


        <ImageSwiper data={flyersCarruselAvisos} />
      </main>
    </>
  )
}

export default App
