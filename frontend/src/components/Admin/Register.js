import { useForm } from "../useForm";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo from "../../assets/images/logo-mundo-animal-mobile.png";
import { Container } from "react-bootstrap";

const initialForm = {
  name:"",
  email: "",
  password: "",
};

const validationsForm = (form) => {
  let errors = {};

  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  
  if(!form.name.trim()){
    errors.name = "El campo nombre es requerido";
  }else if(!regexName.test(form.name.trim())){
    errors.name = "Valores diferentes a letras no se aceptan"
  }

  if (!form.email.trim()) {
    errors.email = "El campo email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo Email es incorrecto";
  }

  if (!form.password.trim()) {
    errors.password = "El campo password es requerido";
  }

  return errors;
};

export default function Register() {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleRegister,
  } = useForm(initialForm, validationsForm);
  
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={4}
            className="d-flex flex-column align-items-center form-cont mt-5 mb-5 pb-3"
          >
            <h2 className="mt-3 form-title">Regístrate</h2>
            <Col className="mt-3 mb-3 img-opacity">
              <img src={Logo} alt="mundo-animal-logo" />
            </Col>
            <Col xs={10}>
              <Form
                onSubmit={handleRegister}
                className="d-flex flex-column align-items-center"
              >
                <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
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
                <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
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

                <Form.Group
                  className="mb-3 col-12"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.password && (
                    <p className="input-error mt-2">{errors.password}</p>
                  )}
                </Form.Group>

                <Button type="submit">
                  Registrar
                </Button>
              </Form>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}
