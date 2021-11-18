import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/logo-mundo-animal-mobile.png"
import MenuIcon from "./MenuIcon";
import { Link } from "react-router-dom";


export default function NavComp(){
  
    return (
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} alt={"img-logo"} />
            </Link>
          </Navbar.Brand>

          <h1>Mundo Animal</h1>

          <div className="justify-content-end">
            <MenuIcon />
          </div>
        </Container>
      </Navbar>
    );
}

