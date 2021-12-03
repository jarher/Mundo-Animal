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
