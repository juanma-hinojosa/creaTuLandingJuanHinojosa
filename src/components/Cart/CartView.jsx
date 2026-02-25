import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Icon } from "@iconify/react"

function CartView() {
  const { cart, removeItem, clear, totalPrice } = useContext(CartContext)
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

        {
          cart.map((compra) => (
            <article key={compra.id} style={{ border: '1px solid gray', backgroundColor: 'white', borderRadius: '4px', padding:'20px' }} >
              <figcaption>
                <div style={{padding:'10px', border: '1px solid grey', borderRadius:'5px', width:'200px'}} >
                  <img src={compra.img} alt={compra.name} style={{ width: '10rem' }} />
                </div>
                <div>
                  <span style={{ color: 'rgb(162, 101, 73)' }} >{compra.name}</span>
                  <button style={{ backgroundColor: 'transparent', color: 'cornflowerblue', fontWeight: '700', padding: '5px', border: '1px solid grey', borderRadius: '5px' }} onClick={() => removeItem(compra.id)}>Eliminar <Icon icon="fluent-mdl2:delete" width="20" height="20" color="#df4d4d" /></button>
                </div>
              </figcaption>

              <figure>

              </figure>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '2rem' }}>

                <span>${compra.price},00</span>
                <span>cantidad: {compra.quantity}</span>
                <span>precio final: ${compra.quantity * compra.price}, 00</span>
              </div>
            </article>

          ))
        }

        {/* FALTA HACER */}
        <span>Total a pagar: ${totalPrice()},00</span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%', padding: '2rem' }}>
          <button className='btn btn-danger' onClick={clear}>Vaciar Carrito</button>
          <button className='btn btn-success'>Terminar compra</button>
        </div>
      </section>
    </>
  )
}

export default CartView