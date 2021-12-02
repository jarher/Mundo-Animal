import { Col, Container } from "react-bootstrap";
import { MdError } from "react-icons/md";

export default function Woops404() {
  return (
    <>
      <Container>
        <Col>
          <MdError />
          <p>Error, página no encontrada</p>
        </Col>
      </Container>
    </>
  );
}
