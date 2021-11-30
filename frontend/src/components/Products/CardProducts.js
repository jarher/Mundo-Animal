import Button from "@restart/ui/esm/Button";
import { Card } from "react-bootstrap";
import img from "../../assets/images/products/whiskas-gatitos.jpg";

export default function CardProducts (props) {
    return (
      <Card data-category={props.category}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body className="d-flex flex-row">
          <div className="col-5">
            <Card.Img variant="top" src={img} />
          </div>

          <div className="col-6 ms-3">
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