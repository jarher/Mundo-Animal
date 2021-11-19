import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "./useForm";

const initialForm = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPhone = /^[0-9\s]+$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo nombre es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "No se aceptan signos diferentes a letras";
  }

  if (!form.lastname.trim()) {
    errors.lastname = "El campo apellido es requerido";
  } else if (!regexName.test(form.lastname.trim())) {
    errors.lastname = "No se aceptan signos diferentes a letras";
  }

  if (!form.email.trim()) {
    errors.email = "El campo Email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo Email es incorrecto";
  }

  if (!form.phone.trim()) {
    errors.phone = "El campo teléfono es requerido";
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "No se aceptan signos diferentes a números";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo texto es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "ha superado el límite de palabras permitido";
  }

  return errors;
};


function Contact() {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleContact,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <Row className="justify-content-center">
        <Col
          xs={10}
          sm={8}
          md={6}
          lg={4}
          className="d-flex flex-column align-items-center form-cont mt-5 mb-5"
        >
          <Form onSubmit={handleContact}>
            <br />
            <h2 className="text-center form-title">
              Contacta con nosotros
            </h2>
            <Form.Group className="mb-3 col-12" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.name && <p className="input-error mt-2">{errors.name}</p>}
            </Form.Group>

            <Form.Group className="mb-3 col-12" controlId="formBasicLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu apellido"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.lastname && (
                <p className="input-error mt-2">{errors.lastname}</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.email && (
                <p className="input-error mt-2">{errors.email}</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3 col-12" controlId="formBasicPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingresa tu número telefónico"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.phone && (
                <p className="input-error mt-2">{errors.phone}</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3 col-12" controlId="formBasicMessage">
              <Form.Label>Deja aquí tu mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingresa tu mensaje"
                name="comments"
                value={form.comments}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.comments && (
                <p className="input-error mt-2">{errors.comments}</p>
              )}
            </Form.Group>

            <Button className="btn mb-3" variant="primary" type="enviar">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
export default Contact;
