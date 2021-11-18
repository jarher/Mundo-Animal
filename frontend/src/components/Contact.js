
import { Container, Form, Button} from "react-bootstrap";
import '../assets/stylesheets/contact.css';

function Contact() {

  return (
    <div>
      <Container className="container mt-4" id="Contac-cont">   
              <Form className="col-6">
              <br/>
                <h2 className="text-center" id="contact-title">
                  Contacta con nosotros
                </h2>
                <Form.Group className="mb-3 col-10 col-sm-10 " controlId="formBasicName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa tu nombre" />
                </Form.Group>

                <Form.Group className="mb-3 col-10 col-sm-10" controlId="formBasicLastName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa tu apellido"/>
                </Form.Group>

                <Form.Group className="mb-3 col-10 col-sm-10" controlId="formBasicEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa tu correo electrónico"/>
                </Form.Group>

                <Form.Group className="mb-3 col-10 col-sm-10" controlId="formBasicPhone">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="number" placeholder="Ingresa tu número telefónico" />
                </Form.Group>

                <Form.Group className="mb-3 col-10 col-sm-10" controlId="formBasicMessage">
                  <Form.Label>Deja aquí tu mensaje</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Ingresa tu mensaje"/>
                </Form.Group>

                <Button className="btn" variant="primary" type="enviar">
                  Enviar
                </Button>
              </Form>
      </Container>
    </div>
  );
}
export default Contact;