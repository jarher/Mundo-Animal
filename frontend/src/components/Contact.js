import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import Button from "@restart/ui/esm/Button";
import '../assets/stylesheets/contact.css';

function Contact() {

  const Formulario = () => {
    const [datos, setDatos] = useState({
      nombre: "",
      apellido: "",
      correoElectrónico: "",
      telefono: "",
      mensaje: ""
    })
  }

  return (
    <>
      <Container className="d-flex flex-column col-10 col-lg-5 col-md-6 col-sm-8" id="Contac-cont">
        <h2 className="text-center" id="contact-title">
          Contacta con nosotros
        </h2>
        <Form>
          <Form.Group className="mb-3 col-10 col-sm-10" controlId="formBasic" >
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" />
          </Form.Group>

          <Form.Group className="mb-3 col-10 col-sm-10" controlId="formBasic">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu apellido" />
          </Form.Group>

          <Form.Group className="mb-3 col-10 col-sm-10" controlId="formBasic">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu correo electrónico" />
          </Form.Group>

          <Form.Group className="mb-3 col-10 col-sm-10" controlId="formBasic">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="number" placeholder="Ingresa tu número telefónico" />
          </Form.Group>

          <Form.Group className="mb-3 col-10 col-sm-10" controlId="formBasicMessage">
            <Form.Label>Deja aquí tu mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Ingresa tu mensaje"/>
          </Form.Group>

          <Button className="btn btn-primary"  variant="primary" type="enviar">
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  );
}
export default Contact;