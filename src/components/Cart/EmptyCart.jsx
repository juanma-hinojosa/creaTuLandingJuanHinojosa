import { useEffect, useState } from "react"
import ItemList from "../Home/ItemList"
import ItemListContainer from "../Home/ItemListContainer"
import { getProducs } from "../../mock/asyncData"

function EmptyCart() {
  const [data, setData] = useState([])

  useEffect(() => {
    getProducs()
      .then(res => setData(res))
      .catch(console.error)
  }, [])

  return (
    <>
      <section className="contendor-maximo">
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: '400',
            color: 'rgb(162, 101, 73)',
            marginBottom: '40px'
          }}
        >Carrito de compras</h1>
        <p
          style={{
            border: '1px solid yellow',
            borderRadius: '4px',
            backgroundColor: '#fce7e7',
            fontSize: '1.2rem',
            fontWeight: '700',
            padding: '20px',
            marginBottom: '40px'

          }}
        >Tu carrito de compras esta vacio! Agregue sus productos de Cacau Show</p>
        <hr />


      </section>
      <ItemListContainer
        tituloSection="Los mas Elegidos"
      >
        <ItemList data={data} />
      </ItemListContainer>
    </>
  )
}

export default EmptyCart