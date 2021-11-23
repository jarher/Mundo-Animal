import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function NavToggle() {

  return (
    <>
      
        <Nav className="justify-content-evenly" activeKey="/home">
          <Nav.Item>
            <Link to="/about">Quienes somos</Link>
          </Nav.Item>
          <Nav.Item id="link-products" className="nav-item">
            <Link to="/products">Productos</Link>
          </Nav.Item>
          <NavDropdown title="Productos" className="d-md-none">
            <NavDropdown.Item eventKey="4.1">
              Alimentos para aves
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">
              Alimentos para perros
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Alimentos para gatos
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Accesorios</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.5">Juguetes</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.6">
              Elementos de Higiene
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <Nav.Item>
            <a href="/#map">ubicación</a>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact">Contacto</Link>
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
