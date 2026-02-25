import { Icon } from "@iconify/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext)
  return (
    <>
      <span
        style={{
          fontSize: "1.5rem"
        }}
        className="cart"
      >

        <NavLink to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center' }} >
            <Icon icon="lineicons:cart-1" width="24" height="24" />

            <div style={{ backgroundColor: '#ee2c2c', textAlign: 'center', fontSize: '.8rem', borderRadius: '20px', width: '20px', height: '20px' }}>
              {totalQuantity()}
            </div>
          </div>
        </NavLink>
      </span>
    </>
  )
}

export default CartWidget;