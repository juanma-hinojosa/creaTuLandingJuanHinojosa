import CartWidget from "./CartWidgetComponent";
import "../styles/NavbarComponent.css"
import Logo from "/logo.png"
import { NavLink } from "react-router-dom";


function NavbarComponent() {
  return (
    <nav>
      <section className="max-width-container">
        <section
          className="topbar"
        >
          <NavLink to='/' className='logonav'>
            <img src={Logo} alt="Logo Cacau Show" />
          </NavLink>
          <div className="features-container">
            <a href="#" className="login-button">Entrar</a>
            <span>Salvador - BA, 41900-040, Brasil</span>
            <CartWidget />
          </div>
        </section>

        <hr />

        <ul className="links-container">
          <li className="link">
            <NavLink to='/category/trufas'>Trufas</NavLink>
          </li>
          <li className="link">
            <NavLink to='/category/chocolates'>Chocolates</NavLink>
          </li>
          <li className="link">
            <NavLink to='/category/gifts'>Cesta y Regalos</NavLink>
          </li>
          <li className="link">
            <NavLink to='/category/pascua'>Pascua</NavLink>
          </li>
          <li className="link">
            <NavLink to='/category/lifestyle'>Lifestyle</NavLink>
          </li>
        </ul>
      </section>

    </nav>
  )
}

export default NavbarComponent;