import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";


export default function RowProducts (props) {
    return (
      <>
        <tr>
          <td>1</td>
          <td>{props.nombre}</td>
          <td>{props.categoria}</td>
          <td>{props.precio}</td>
          <td>{props.descripcion}</td>
          <td>
            {" "}
            <img src={props.imagenUrl} />{" "}
          </td>
          <td>
            <Button>Editar</Button>
            <Button>Eliminar</Button>
          </td>
        </tr>
      </>
    );
}