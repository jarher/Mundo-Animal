import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={6} className="mt-3 order-md-1">
            <ul>
              <li>
                <a
                  class="link-dark"
                  href="https://www.facebook.com/Mundo-animal-pet-shop-109439561382295"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  class="link-dark"
                  href="https://www.instagram.com/mundo_animalps/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  class="link-dark"
                  href="https://api.whatsapp.com/send?phone=573222209054"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="bi bi-whatsapp"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} className="mt-md-3 order-md-0">
            <p>&copy; 2021.Mundo Animal petshop. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
