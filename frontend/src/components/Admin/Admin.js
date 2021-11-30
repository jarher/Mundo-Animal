import axios from "axios";
import { useEffect, useState } from "react";
import { APIHOST as host } from "../../app.json";
import { Container, Form, Modal, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProductList from "./ProductList";
import { useForm } from "../useForm";

const initialForm = {
  name: "",
  category: "",
  price: "",
  description: "",
  imgUrl: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexCategory = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexPrice = /^[0-9\s]+$/;
  let regexDescription = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo nombre es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "No se aceptan signos diferentes a letras";
  }

  if (!form.category.trim()) {
    errors.category = "El campo descripción es requerido";
  } else if (!regexCategory.test(form.category.trim())) {
    errors.category = "No se aceptan signos diferentes a letras";
  }

  if (!form.price.trim()) {
    errors.price = "El campo de precio es requerido";
  } else if (!regexPrice.test(form.price.trim())) {
    errors.price = "No se aceptan signos diferentes a números";
  }

  if (!form.description.trim()) {
    errors.description = "El campo descripción es requerido";
  } else if (!regexDescription.test(form.description.trim())) {
    errors.description = "ha superado el límite de palabras permitido";
  }

  return errors;
};

export default function Admin() {

  const [prod, setProd] = useState([]);
  const [show, setShow] = useState(false);

  const getProducts = () => {
    axios
      .get(`${host}/api/products`)
      .then((response) => {
        setProd(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  //manejo del formulario
  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleCreateProd,
    deleteProduct
  } = useForm(initialForm, validationsForm);


  //funcion para ventana modal

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Button className="mt-2 add-prod" onClick={handleShow}>
          Agregar nuevo producto
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>Nuevo Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleCreateProd}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ingresa nombre del producto"
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

              <Form.Group className="mb-3" controlId="formBasicCategory">
                <Form.Label>Categoría</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ingresa la categoría"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.category && (
                  <p className="input-error mt-2">{errors.category}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="ingresa el precio"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.price && (
                  <p className="input-error mt-2">{errors.price}</p>
                )}
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>descripcion</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="describe el nuevo producto"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.description && (
                  <p className="input-error mt-2">{errors.description}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Sube una imagen</Form.Label>
                <Form.Control
                  type="file"
                  name="filename"
                  value={form.file}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Agregar
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <div className="d-flex flex-column align-items-center flex-sm-row flex-wrap justify-content-sm-between mt-4">
          <ProductList
            items={prod}
            onRemoveItem={(id) => {

              deleteProduct(id);

              const newItems = prod.filter((item) => item._id !== id);

              setProd(newItems);
              
            }}
          />
        </div>
      </Container>
    </>
  );
}
