import { useState } from "react";
import { Icon } from "@iconify/react";
import CartWidget from "./CartWidgetComponent";
import "../styles/NavbarComponent.css";
import Logo from "/cacaushow-logo.png";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <section className="max-width-container">
        <section className="topbar">
          <NavLink to="/" className="logonav">
            <img src={Logo} alt="Logo Cacau Show" />
          </NavLink>

          <div className="features-container">
            <a href="#" className="login-button">Entrar</a>
            <span>Salvador - BA, 41900-040, Brasil</span>
            <CartWidget />
          </div>

          {/* Botón Mobile */}
          <div className="mobile-actions">
            <CartWidget />

            <button className="menu-toggle" onClick={toggleMenu}>
              {menuOpen ? (
                <Icon icon="mdi:close" width="28" />
              ) : (
                <Icon icon="mdi:menu" width="28" />
              )}
            </button>
          </div>
        </section>

        <ul className={`links-container ${menuOpen ? "active" : ""}`}>
          <li className="link">
            <NavLink to="/category/trufas" onClick={closeMenu}>Trufas</NavLink>
          </li>
          <li className="link">
            <NavLink to="/category/chocolates" onClick={closeMenu}>Chocolates</NavLink>
          </li>
          <li className="link">
            <NavLink to="/category/gifts" onClick={closeMenu}>Cesta y Regalos</NavLink>
          </li>
          <li className="link">
            <NavLink to="/category/pascua" onClick={closeMenu}>Pascua</NavLink>
          </li>
          <li className="link">
            <NavLink to="/category/lifestyle" onClick={closeMenu}>Lifestyle</NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default NavbarComponent;