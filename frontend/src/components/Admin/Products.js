import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import img from "../../assets/images/products/whiskas-gatitos.jpg";
import { MdDelete } from "react-icons/md";
import { IoIosCloudUpload } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { FaPencilAlt } from "react-icons/fa";
import { useRef } from "react";
import { useForm } from "../useForm";

const initialForm = {
  name: "",
  category: "",
  price: "",
  description: "",
  imageUrl: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexCategory = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  // let regexNumber = /^[0-9\s]+$/;
  let regexDescription = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo nombre es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "No se aceptan signos diferentes a letras";
  }

  if (!form.category.trim()) {
    errors.category = "El campo categoría es requerido";
  } else if (!regexCategory.test(form.category.trim())) {
    errors.category = "No se aceptan signos diferentes a letras";
  }

  // if (!form.price.trim()) {
  //   errors.number = "El campo precio es requerido";
  // } else if (!regexNumber.test(form.number.trim())) {
  //   errors.number = "No se aceptan signos diferentes a números";
  // }

  if (!form.description.trim()) {
    errors.description = "El campo texto es requerido";
  } else if (!regexDescription.test(form.description.trim())) {
    errors.description = "ha superado el límite de palabras permitido";
  }

  return errors;
};

export default function Products({
  _id,
  nombre,
  categoria,
  precio,
  descripcion,
  imagenUrl,
  onRemove = (f) => f,
}) {

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleUpProd,
    getId
  } = useForm(initialForm, validationsForm);

    const inputName = useRef();
    const inputCat = useRef();
    // const inputPrice = useRef();
    const inputDesc = useRef();

    const editName = () => {
      inputName.current.disabled = false;
    }

    const editCat = () => {
      inputCat.current.disabled = false;
    };

    // const editPrice = () => {
    //   inputPrice.current.disabled = false;
    // };

    const editDesc = () => {
      inputDesc.current.disabled = false;
    };

  return (
    <>
      <Form
        className="admin-form p-4 col-11 col-sm-5 mb-5 me-3"
        onSubmit={handleUpProd}
      >
        <input
          id="prodId"
          name="prodId"
          type="hidden"
          value={_id}
        />
        <Form.Group className="mb-3" controlId="formBasicFile">
          <Form.Control
            type="file"
            placeholder="subir imagen"
            className="col-10"
          />
        </Form.Group>

        <Form.Label>Nombre</Form.Label>
        <Form.Group
          className="mb-3 d-flex flex-row align-items-start"
          controlId="formBasicName"
        >
          <Form.Control
            className="me-3"
            type="text"
            placeholder={nombre}
            ref={inputName}
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled
          />
          <OverlayTrigger
            placement={"right"}
            overlay={<Tooltip>Editar</Tooltip>}
          >
            <Button variant="light" onClick={editName}>
              <FaPencilAlt />
            </Button>
          </OverlayTrigger>
        </Form.Group>
        {errors.name && <p className="input-error mt-2">{errors.name}</p>}

        <Form.Label>Categoría</Form.Label>
        <Form.Group
          className="mb-3 d-flex flex-row align-items-start"
          controlId="formBasicCategory"
        >
          <Form.Control
            className="me-3"
            type="text"
            placeholder={categoria}
            ref={inputCat}
            name="category"
            value={form.category}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled
          />
          <OverlayTrigger
            placement={"right"}
            overlay={<Tooltip>Editar</Tooltip>}
          >
            <Button variant="light" onClick={editCat}>
              <FaPencilAlt />
            </Button>
          </OverlayTrigger>
        </Form.Group>
        {errors.category && (
          <p className="input-error mt-2">{errors.category}</p>
        )}

        <Form.Label>Precio</Form.Label>
        <Form.Group
          className="mb-3 d-flex flex-row align-items-start"
          controlId="formBasicPrice"
        >
          <Form.Control
            className="me-3"
            type="number"
            placeholder={precio}
            // ref={inputPrice}
            name="price"
            value={form.price}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          <OverlayTrigger
            placement={"right"}
            overlay={<Tooltip>Editar</Tooltip>}
          >
            <Button variant="light">
              <FaPencilAlt />
            </Button>
          </OverlayTrigger>
        </Form.Group>
        {errors.price && <p className="input-error mt-2">{errors.price}</p>}

        <Form.Label>Descripción</Form.Label>
        <Form.Group
          className="mb-3 d-flex flex-row align-items-start"
          controlId="formBasicDescription"
        >
          <Form.Control
            className="me-3"
            as="textarea"
            placeholder={descripcion}
            style={{ height: "100px" }}
            ref={inputDesc}
            name="description"
            value={form.description}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled
          />
          <OverlayTrigger
            placement={"right"}
            overlay={<Tooltip>Editar</Tooltip>}
          >
            <Button variant="light" onClick={editDesc}>
              <FaPencilAlt />
            </Button>
          </OverlayTrigger>
        </Form.Group>
        {errors.description && (
          <p className="input-error mt-2">{errors.description}</p>
        )}

        <div className="d-flex flex-row justify-content-between admin-form-buttons col-12">
          <OverlayTrigger
            placement={"right"}
            overlay={<Tooltip>Actualizar</Tooltip>}
          >
            <Button type="submit">
              <IoIosCloudUpload />
            </Button>
          </OverlayTrigger>

          <OverlayTrigger
            placement={"left"}
            overlay={<Tooltip>Eliminar</Tooltip>}
          >
            <Button onClick={() => onRemove(_id)}>
              <MdDelete />
            </Button>
          </OverlayTrigger>
        </div>
      </Form>
    </>
  );
}
