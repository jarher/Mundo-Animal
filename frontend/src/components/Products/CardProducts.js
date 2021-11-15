import Button from "@restart/ui/esm/Button";
import { Card } from "react-bootstrap";
// import img from "../../assets/images/products/whiskas-gatitos.jpg";

export default function CardProducts (props) {
    return (
      <Card data-category={props.category} className="product-card">
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          {/* <Card.Img variant="top" src={img} /> */}
          <Card.Text>
            <p>
              <span>Descripción: </span>
              {props.description}
            </p>
            <p>
              <span>Precio: </span>
              {props.price}
            </p>
          </Card.Text>
          <Button variant="primary" className="btn btn-sale">
            <a href="https://api.whatsapp.com/send?phone=573222209054">
              Comprar
            </a>
          </Button>
        </Card.Body>
      </Card>
    );
}