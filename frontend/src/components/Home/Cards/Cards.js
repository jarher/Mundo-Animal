import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import Food from "../LottieFood";
import Accesories from "../LottieAccesories";
import Toys from "../LottieToy";
import Health from "../LottieHealth";
import { Link } from "react-router-dom";


export default function Cards() {
  return (
    <Container className="category-cont">
      <Row>
        <Col className="gx-5">
          <Card className="align-items-center">
            <Card.Header className="text-center">Alimentos</Card.Header>
            <Food />
            <Card.Body>
              <Button variant="primary">
                <Link to="/products">Busca aquí</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="gx-5">
          <Card className="align-items-center">
            <Card.Header className="text-center">Accesorios</Card.Header>
            <Accesories />
            <Card.Body>
              <Button variant="primary">
                <Link to="/products">Busca aquí</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="gx-5">
          <Card className="align-items-center">
            <Card.Header className="text-center">Juguetes</Card.Header>
            <Toys />
            <Card.Body>
              <Button variant="primary">
                <Link to="/products">Busca aquí</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="gx-5">
          <Card className="align-items-center">
            <Card.Header className="text-center">Salud y Belleza</Card.Header>
            <Health />
            <Card.Body>
              <Button variant="primary">
                <Link to="/products">Busca aquí</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
