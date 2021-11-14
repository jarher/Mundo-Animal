import Button from "@restart/ui/esm/Button";
import { Card, Col } from "react-bootstrap";

export default function CardProducts (props) {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>props.title</Card.Title>
            <Card.Img variant="top" src={props.img} />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className="button-sale">
              <a href="https://api.whatsapp.com/send?phone=573222209054">
                Comprar
              </a>
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
}