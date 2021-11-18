import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { useState } from "react";
import { useForm } from "./useForm";

const initialForm = {
  email: "",
  password: "",
};

const validationsForm = (form) => {};

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm.validationsForm);

  return (
    <>
      {/* <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            // value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Contraseña"
            name="password"
            // value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" value="enviar"></Button>
      </Form> */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.password}
          required
        />
      </form>
    </>
  );
}
