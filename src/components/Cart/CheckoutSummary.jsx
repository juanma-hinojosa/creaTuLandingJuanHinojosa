import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Icon } from "@iconify/react"
import { useAuth } from "../../context/AuthContext"
import '../../styles/CheckoutSummary.css'

function CheckoutSummaryComponent() {
  const { cart, removeItem, clear, totalPrice, itemQty, totalQuantity, valorServicioPlataforma, valorEntrega, precioFinal } = useContext(CartContext)
  const { user, profile } = useAuth()

  const currencyFormatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })


  return (
    <section>
      <h1 className="cartview-title">
        Resumen del pedido
      </h1>

      <section className="grid-contenedor" >
        <section className="cartview-total" >
          <h2>Enviar a Domicilio</h2>
          <p>{profile.firstName} {profile.lastName}</p>
          <p>{profile.address} {profile.addressNum} - {profile.city}, {profile.provincia} - CP {profile.postalCode}  </p>
          <p>Residencial</p>
          <p>Contacto: {profile.telefono}</p>
        </section>

        <section>
          <div className="cartview-total">
            <h3>Resumen de compra</h3>
            <hr />
            <div style={{ textTransform: 'uppercase' }} >
              <h4><Icon icon="bytesize:cart" width="22" height="22" style={{ marginRight: '10px' }} /> {totalQuantity()} producto(s) </h4>
              <span>{currencyFormatter.format(totalPrice())}</span>
            </div>


            <div style={{ textTransform: 'uppercase' }} >
              <h4><Icon icon="lets-icons:paper-light" width="22" height="22" style={{ marginRight: '10px' }} /> Tarifa de servicio  </h4>
              <span>{currencyFormatter.format(valorServicioPlataforma())}</span>
            </div>


            <div style={{ color: '#642222', textTransform: 'uppercase', marginTop: '20px' }}>
              <h4><Icon icon="ph:truck-light" width="22px" height="22px" style={{ marginRight: '10px' }} /> Entrega </h4>
              <span>{currencyFormatter.format(valorEntrega())}</span>
            </div>
            <hr />

            <div style={{ color: '#411616' }}>
              <h4 style={{ textTransform: 'uppercase' }} >Total a pagar:</h4>
              <span style={{ fontSize: '1.4rem', fontWeight: '500' }} >
                {currencyFormatter.format(precioFinal())}
              </span>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default CheckoutSummaryComponent