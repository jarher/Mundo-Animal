import Table from "react-bootstrap/Table";
import RowProducts from "./RowProducts";
import axios from "axios";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import {APIHOST as host} from "../../app.json"

export default function Admin() {
    const[prod,setProd] = useState ([]);

    const getProducts = () => {
        axios.get(`${host}/api/products`).then((response)=>{
            setProd (response.data);
        }).catch ((error) => {
            console.error(error);
        })
    };

    useEffect (()=> {
        getProducts ();
    },[]);

    const rowProds = prod.map(
        element => (
            <Col>
                <RowProducts>
                    nombre = {element.nombre}
                    categoria = {element.categoria}
                    descripcion = {element.descripcion}
                    precio = {element.precio}
                    imagenUrl = {element.imagenUrl}
                </RowProducts>
            </Col>
        ),[prod]
    );

    return (
    <>
      <Table striped bordered hover size="sm">
            <thead>
                <th>item</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th>Imagen</th>
            </thead>
            <tbody>
                {rowProds}
            </tbody>
      </Table>
    </>
  );
};
