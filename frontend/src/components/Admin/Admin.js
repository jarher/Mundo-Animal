import axios from "axios";
import { useEffect, useState } from "react";
import { APIHOST as host } from "../../app.json";
import { Container, Form, Modal, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProductList from "./ProductList";
import SendingData from "../SendData";
import FormProduct from "./FormProducts";

// import sendImages from "../../services/UploadService";
// import SendingData from "../SendData";


export default function Admin() {

  const [prod, setProd] = useState([]);
  const [show, setShow] = useState(false);
  // const [file, setFile] = useState();
  // const [pathImage, setPathImage] = useState(`${host}/upload.png`);

  
  
//visualización previa de la imagen
  // const onFileChange = (e) => {
  //   if(e.target.files && e.target.files.length > 0) {
  //     const file = e.target.files[0];
  //     if(file.type.includes("image")){
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file)

  //       reader.onload = function load() {
  //         setPathImage(reader.result)
  //       }

  //       setFile(file)
  //     }else{
  //       console.log("error al subir imagen")
  //     }
  //   }
  // }

  //obtener productos
  const getProducts = () => {
    axios
      .get(`${host}/api/products`)
      .then((response) => {
        setProd(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  //validación formulario
  // const {
  //   form,
  //   errors,
  //   handleChange,
  //   handleBlur,
  //   // handleCreateProd,
  //   deleteProduct
  // } = useForm(initialForm, validationsForm);


  //funcion para ventana modal

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const deleteProduct = (id) => {
    SendingData(
      false,
      "delete",
      `${host}/api/products/${id}`,
      null,
      (res) => {
        alert("producto borrado con éxito");
        console.log(res);
      },
      (res) => {
        alert("error: no se pudo eliminar el producto");
        console.log(res);
      }
    );
  };

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
            <FormProduct />
            {/* <Form onSubmit={handleCreateProd}>
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
                <div className="col-3 mt-3 mb-3">
                  <img src={pathImage} alt="producto-imagen" />
                </div>
                <Form.Control
                  type="file"
                  name="filename"
                  value={form.file}
                  onBlur={handleBlur}
                  onChange={onFileChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Agregar
              </Button>
            </Form> */}
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
