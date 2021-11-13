import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function NavToggle() {

  return (
    <>
      <Nav className="justify-content-evenly" activeKey="/home">
        <Nav.Item>
          <Link to="/">
            <i className="material-icons">home</i>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about">
            Quienes somos
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/products">
            Productos
          </Link>
        </Nav.Item>
        <Nav.Item>
          <a href="/#map">
            ubicación
          </a>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact">
            Contacto
          </Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
