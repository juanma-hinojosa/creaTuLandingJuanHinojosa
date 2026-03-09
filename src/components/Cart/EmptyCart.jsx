import { useEffect, useState } from "react"
import { getProducs } from "../../mock/asyncData"
import ItemListContainer from "../ItemListContainer"
import ItemList from "../ItemList"
import { Link } from "react-router-dom"

function EmptyCart() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   getProducs()
  //     .then(res => setData(res))
  //     .catch(console.error)
  // }, [])

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
            marginBottom: '40px',
            color: 'black'

          }}
        >Tu carrito de compras esta vacio! Agregue sus productos de Cacau Show</p>
        <hr />

        <Link to='/' style={{color:'cornflowerblue', textDecoration:'none'}} > Volver a comprar </Link>

      </section>

      <ItemListContainer
        tituloSection="Los Mas Elegidos"
      >
        <ItemList data={data.slice(0, 4)} loading={loading} />
      </ItemListContainer>
    </>
  )
}

export default EmptyCart