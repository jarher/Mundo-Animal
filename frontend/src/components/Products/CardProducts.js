import Button from "@restart/ui/esm/Button";
import { Card } from "react-bootstrap";

export default function CardProducts (props) {
    return (
      <Card>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body className="d-flex flex-column">
          <div className="col-12">
            <Card.Img variant="top" src={props.img} />
          </div>

          <div className="col-12">
            <Card.Text>
              <p>
                <span className="text-info fw-bold">Descripción: </span>
                {props.description}
              </p>
              <p>
                <span className="text-info fw-bold">Precio: </span>
                {props.price}
              </p>
            </Card.Text>
            <Button variant="primary" className="btn btn-sale">
              <a href="https://api.whatsapp.com/send?phone=573222209054" target="_blank">
                Comprar
              </a>
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
}