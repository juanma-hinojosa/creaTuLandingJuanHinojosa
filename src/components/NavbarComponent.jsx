import CartWidget from "./CartWidgetComponent";
import "../styles/NavbarComponent.css"
import Logo from "/logo.png"


function NavbarComponent() {
  return (
    <nav>
      <section className="max-width-container">
        <section
          className="topbar"
        >
          <img src={Logo} alt="Logo Cacau Show" />
          <div className="features-container">
            <a href="#" className="login-button">Entrar</a>
            <span>Salvador - BA, 41900-040, Brasil</span>
            <CartWidget />
          </div>
        </section>

        <hr />

        <ul className="links-container">
          <li className="link"><a href="#">Chocolates</a></li>
          <li className="link"><a href="#">Cookies</a></li>
          <li className="link"><a href="#">Cestas y Regalos</a></li>
          <li className="link"><a href="#">Pascuas</a></li>
          <li className="link"><a href="#">Recetas</a></li>
        </ul>
      </section>

    </nav>
  )
}

export default NavbarComponent;