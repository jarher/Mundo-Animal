import { Col, Row } from "react-bootstrap";
import CardProducts from "./CardProducts";

export default function Products() {
  const changeClass = (e) => {
    const links_prod = document.querySelectorAll(".linkNav");
    let data_index = e.target.dataset.index;
    console.log(data_index);
    links_prod.forEach((link, index) => {
      if (data_index == index) {
        link.classList.add("pr-active");
      } else {
        link.classList.remove("pr-active");
      }
    });
  };
  return (
    <>
      <div className="d-flex flex-sm-row flex-column">
        <Col lg={2} md={3} >
          <ul className="productNav">
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
          </ul>
        </Col>
        <Col xs={12} md={10} className="d-flex flex-row flex-wrap">
          <Row>
            
            
          </Row>
        </Col>
      </div>
    </>
  );
}
