import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/logo-mundo-animal-mobile.png";
import MenuIcon from "./MenuIcon";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function NavComp() {
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
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/" onClick={changeIcon}>
            <img src={Logo} alt={"img-logo"} />
          </Link>
        </Navbar.Brand>

        <Link to="/" onClick={changeIcon} id="main-title">
          <h1>Mundo Animal</h1>
        </Link>

        <div className="justify-content-end">
          <MenuIcon />
        </div>
      </Container>
    </Navbar>
  );
}
