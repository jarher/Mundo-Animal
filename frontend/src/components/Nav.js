import { useRef } from "react";
import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function NavToggle() {
  let refIcon = useRef();
  const changeIcon = () => {
    const nav = document.querySelector(".nav");

    if (refIcon.current.textContent === "menu") {
      refIcon.current.textContent = "close";
      if (nav.classList.contains("slideout")) {
        nav.classList.remove("slideout");
      }
      nav.classList.add("slidein");
    } else {
      refIcon.current.textContent = "menu";
      nav.classList.remove("slidein");
      nav.classList.add("slideout");
    }
  };
  return (
    <>
      <Nav className="justify-content-evenly" activeKey="/home">
        <Nav.Item>
          <Link to="/about" onClick={changeIcon}>
            Quienes somos
          </Link>
        </Nav.Item>
        <Nav.Item id="link-products" className="nav-item">
          <Link to="/products" onClick={changeIcon}>
            Productos
          </Link>
        </Nav.Item>
        <Nav.Item>
          <a href="/#map" onClick={changeIcon}>
            ubicación
          </a>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact" onClick={changeIcon}>
            Contacto
          </Link>
        </Nav.Item>
        <Nav.Item className="d-md-none">
          <ul
            className="d-flex flex-row justify-content-evenly"
            id="social-nav-menu"
          >
            <li>
              <a
                className="link-dark"
                href="https://www.facebook.com/Mundo-animal-pet-shop-109439561382295"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a
                className="link-dark"
                href="https://www.instagram.com/mundo_animalps/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a
                className="link-dark"
                href="https://api.whatsapp.com/send?phone=573222209054"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>
          </ul>
        </Nav.Item>
      </Nav>
    </>
  );
}
