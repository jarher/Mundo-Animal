import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import Food from "../LottieFood";
import Accesories from "../LottieAccesories";
import Toys from "../LottieToy";
import Health from "../LottieHealth";

export default function Cards() {
  return (
    <Container>
      <Row className="category-cont">
        <Col>
          <Card>
            <Card.Header>Alimentos</Card.Header>
            <Food />
            <Card.Body>
              <Button variant="success">Busca aquí</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Accesorios</Card.Header>
            <Accesories />
            <Card.Body>
              <Button variant="success">Busca aquí</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Juguetes</Card.Header>
            <Toys />
            <Card.Body>
              <Button variant="success">Busca aquí</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Salud y Belleza</Card.Header>
            <Health />
            <Card.Body>
              <Button variant="success">Busca aquí</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
