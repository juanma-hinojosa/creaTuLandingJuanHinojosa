import { useEffect, useState } from 'react'
import './App.css'
import ImageSwiper from './components/CaruselSection'
import ItemList from './components/ItemList'
import ItemListContainer from './components/ItemListContainer'
import NavbarComponent from './components/NavbarComponent'
import { flyersCarrusel, flyersCarruselAvisos, listaMomentosDulces } from './mock/asyncDataCarrusel'
import { getProducs } from './mock/asyncData'
import ImgList from './components/ItemImgList'
import ItemImg from './components/Img'
import ItemComponent from './components/Item'

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
          <ItemList data={data} />
        </ItemListContainer>


        <ImageSwiper data={flyersCarruselAvisos} />
      </main>
    </>
  )
}

export default App
