import { Col, Row } from "react-bootstrap";
import CardProducts from "./CardProducts";
import axios from "axios";
import { APIHOST as host } from "../../app.json";
import { useEffect, useState } from "react";
import img from "../../assets/images/cuidado-de-mascotas.png";

export default function Products() {
  const [prod, setProd] = useState([]);

  const changeClass = (e) => {
    const links_prod = document.querySelectorAll(".linkNav");

    let data_index = e.target.dataset.index;

    links_prod.forEach((link, index) => {
      if (data_index == index) {
        link.classList.add("pr-active");
      } else {
        link.classList.remove("pr-active");
      }
    });
  };

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

  const Prods = prod.map(
    (el, index) => (
      <Col
        className="mb-3 ms-md-3 col-sm-5 col-9 card-cont"
        data-number={index}
      >
        <CardProducts
          title={el.nombre}
          category={el.categoria}
          description={el.descripcion}
          price={el.precio}
        />
      </Col>
    ),
    [prod]
  );

  if (Prods.length === 0) return <p>No hay productos </p>;
  return (
    <>
      <div className="d-flex flex-column flex-sm-row">
        <Col lg={2} md={3} className="d-none d-md-block">
          <ul className="productNav pt-md-3">
            <li
              className="linkNav pr-active"
              onClick={changeClass}
              data-index="0"
            >
              Alimento para Aves
            </li>
            <li className="linkNav" onClick={changeClass} data-index="1">
              Alimento para Perros
            </li>
            <li className="linkNav" onClick={changeClass} data-index="2">
              Alimento para Gatos
            </li>
            <li className="linkNav" onClick={changeClass} data-index="3">
              Accesorios
            </li>
            <li className="linkNav" onClick={changeClass} data-index="4">
              Juguetes
            </li>
            <li className="linkNav" onClick={changeClass} data-index="5">
              Productos de Higiene
            </li>
            <div id="img-nav-prod">
              <img src={img} alt="cuidado-de-mascotas" />
            </div>
          </ul>
        </Col>
        <div className="d-flex flex-sm-row flex-wrap mt-4 justify-content-start ms-md-3">
          {Prods}
        </div>
      </div>
    </>
  );
}
