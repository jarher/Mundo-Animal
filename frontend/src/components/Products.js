import { Col, Nav, Row } from "react-bootstrap";

function Products() {
  return (
    <>
      <Row>
        <Col md={2}>
          <ul className="productNav">
            <li>alimento para perros</li>
            <li>alimento para gatos</li>
            <li>juguetes</li>
            <li>accesorios</li>
          </ul>
        </Col>
        <Col md={10}></Col>
      </Row>
    </>
  );
}

export default Products;
