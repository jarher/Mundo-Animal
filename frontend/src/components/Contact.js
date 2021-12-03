import { Form, Button, Row, Col, Container } from "react-bootstrap";
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
    <>
      <Container>
        <Row className="justify-content-evenly">
          <div id="map" className="d-flex flex-column align-items-center col-4 mt-4">
            <h5 className="text-center">Ubicación</h5>
            <iframe
              id="map-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.0723742216746!2d-73.77572528524021!3d4.005544097087013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e3914e92f6ced%3A0xb4acfb050b683646!2sPlaza%20de%20Mercado%20Centenaria!5e0!3m2!1ses-419!2sco!4v1632093512607!5m2!1ses-419!2sco"
              allowfullscreen=""
              loading="lazy"
              title="mundo-animal-mapa"
            ></iframe>
          </div>
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={4}
            className="d-flex flex-column align-items-center form-cont mt-5 mb-5"
          >
            <Form onSubmit={handleContact}>
              <br />
              <h2 className="text-center form-title">Contacta con nosotros</h2>
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
                {errors.name && (
                  <p className="input-error mt-2">{errors.name}</p>
                )}
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

              <Button
                className="btn mb-3 btn-contact"
                variant="primary"
                type="submit"
              >
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Contact;
