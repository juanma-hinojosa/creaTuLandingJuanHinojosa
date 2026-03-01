import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Icon } from "@iconify/react"
import '../../styles/CartView.css'
import { Link } from "react-router-dom"

function CartView() {
  const { cart, removeItem, clear, totalPrice, itemQty, totalQuantity } = useContext(CartContext)

  const currencyFormatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  const precioEntrega = 12400

  return (
    <section className="cartview-container">

      <h1 className="cartview-title">
        Carrito de compras
      </h1>
      {cart.map((compra) => {

        const stockActualizado = compra.stock - itemQty(compra.id)

        return (
          <article key={compra.id} className="cartview-card">

            <figcaption className="cartview-card-header">

              <div className="cartview-img-container">
                <img
                  src={compra.img}
                  alt={compra.name}
                  className="cartview-img"
                />
              </div>

              <div className="cartview-info">
                {/* <span className="cartview-product-name"> */}
                <Link to={`/item/${compra.id}`} className="cartview-product-name" >
                  {compra.name}
                </Link>
                {/* </span> */}

                <button
                  className="cartview-delete-btn"
                  onClick={() => removeItem(compra.id)}
                >
                  Eliminar <Icon
                    icon="fluent-mdl2:delete"
                    width="12"
                    height="12"
                    color="#df4d4d"
                  />
                </button>
              </div>

            </figcaption>

            <div className="cartview-card-footer">

              <div className="column-cartview-card-footer">
                <h4>Precio unitario</h4>
                <span>{currencyFormatter.format(compra.price)}</span>
              </div>

              <div className="column-cartview-card-footer">
                <h4>Cantidad</h4>
                <span>{compra.quantity}</span>
                <h4 style={{ marginTop: '20px' }} >{stockActualizado} en stock</h4>
              </div>

              <div className="column-cartview-card-footer">
                <h4>Subtotal</h4>
                <span>
                  {currencyFormatter.format(compra.quantity * compra.price)}
                </span>
              </div>

            </div>
          </article>
        )
      })}


      <div
        style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: '50px'}}
      >
        <button style={{ color: '#df4d4d', backgroundColor: 'transparent', border: 'none', fontSize: '15px', cursor: 'pointer' }} onClick={clear}>
          Vaciar Carrito
          <Icon
            icon="fluent-mdl2:delete"
            width="12"
            height="12"
            color="#df4d4d"
            style={{ marginLeft: '5px' }}
          />
        </button>

        <Link to='/' style={{textDecoration:'none', color:'cornflowerblue', fontSize: '15px'}} > Continuar comprando <Icon icon="formkit:arrowright" width="21.34px" height="12px" /> </Link>
      </div>

      <section>
        <h1 className="cartview-title">
          Detalle del pedido
        </h1>

        <div className="cartview-total">
          <h3>Cupon de Descuento</h3>
          <hr />
          <div style={{textTransform:'uppercase'}} >
            <h4><Icon icon="bytesize:cart" width="22" height="22" style={{ marginRight: '10px' }} /> {totalQuantity()} producto(s) </h4>
            <span>{currencyFormatter.format(totalPrice())}</span>
          </div>

          <div style={{color:'#642222', textTransform:'uppercase', marginTop:'20px'}}>
            <h4><Icon icon="ph:truck-light" width="22px" height="22px" style={{ marginRight: '10px' }} /> Entrega </h4>
            <span>{currencyFormatter.format(precioEntrega)}</span>
          </div>
          <hr />

          <div style={{color:'#411616'}}>
            <h4 style={{textTransform:'uppercase' }} >Total a pagar:</h4>
            <span style={{fontSize:'1.4rem', fontWeight:'500'}} >
              {/* {currencyFormatter.format(totalPrice())}  */}

              {currencyFormatter.format((totalPrice() + precioEntrega))}
            </span>
          </div>
        </div>
      </section>


      {/* <div className="cartview-actions">
        <button className="btn btn-danger" onClick={clear}>
          Vaciar Carrito
        </button>
        <button className="btn btn-success">
          Terminar compra
        </button>
      </div> */}

      <button 
        className="comprar-buton"
      >
        Terminar compra
      </button>

    </section>
  )
}

export default CartView