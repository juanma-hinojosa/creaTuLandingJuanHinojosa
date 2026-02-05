import { Icon } from "@iconify/react";

function CartWidget() {
  return(
    <>
      <span
        style={{
          fontSize:"1.5rem"
        }}
        className="cart"
      >

        <Icon icon="lineicons:cart-1" width="24" height="24" />
      </span>
    </>
  )
}

export default CartWidget;