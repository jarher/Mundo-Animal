import { OverlayTrigger, Tooltip } from "react-bootstrap";
import img from "../../assets/images/products/whiskas-gatitos.jpg";

export default function RowProducts(props) {
  return (
    <>
      <form id="admin-form">
        <table>
          <thead>
            <tr className="tr-head">
              <th className="th-item">Item</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>imagen</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="item-cell">
                <p>{props.item}</p>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={props.nombre}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder={props.categoria}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder={props.precio}
                />
              </td>
              <td>
                <textarea
                  name="textarea"
                  rows="4"
                  cols="20"
                  placeholder="describe tu producto aquí"
                ></textarea>
              </td>
              <td>
                <input
                  type="image"
                  name="image"
                  id="image"
                  src={img}
                  alt="imagen-producto"
                />
                <input type="file" />
              </td>
              <td className="admin-form-buttons">
                <OverlayTrigger
                  placement={"bottom"}
                  overlay={<Tooltip>Actualizar</Tooltip>}
                >
                  <button className="material-icons">publish</button>
                </OverlayTrigger>
                <OverlayTrigger placement={"bottom"} overlay={<Tooltip>Eliminar</Tooltip>}>
                  <button className="material-icons">delete</button>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
