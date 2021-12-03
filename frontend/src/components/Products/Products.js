import { Col, Row } from "react-bootstrap";
import CardProducts from "./CardProducts";
import axios from "axios";
import { APIHOST as host } from "../../app.json";
import { useEffect, useRef, useState } from "react";
import img from "../../assets/images/cuidado-de-mascotas.png";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Products() {

  const [prod, setProd] = useState([]);
  const navProd = useRef();
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

  const changeClass = (e) => {

    const nvPrd = document.getElementById("prod-items-nav");

    nvPrd.classList.add("d-none");

    let data_category = e.target.dataset.category;

    let products = document.querySelectorAll(".card-cont");

    products.forEach((product )=> {
      if(product.dataset.category === data_category){
        product.style.display = "block"
      }else{
        product.style.display = "none";
      }
    });
   
  };

  const showProdNav = (e) => {
    navProd.current.classList.remove('d-none');
  }

  const Prods = prod.map(
    (el, index) => (
      <Col
        className="mb-3 ms-md-3 col-sm-5 col-9 card-cont"
        data-number={index}
        data-category={el.categoria}
      >
        <CardProducts
          title={el.nombre}
          description={el.descripcion}
          price={el.precio}
          img={el.imagenUrl}
        />
      </Col>
    ),
    [prod]
  );

  if (Prods.length === 0) return <p>No hay productos </p>;

  return (
    <>
      <div className="d-flex flex-column flex-sm-row position-relative">
        <FaArrowCircleRight id="prod-items-nav-btn" className="d-md-none" onClick={showProdNav}/>
        <Col lg={2} md={3} className="d-none d-md-block" id="prod-items-nav" ref={navProd}>
          <ul className="productNav pt-md-3">
            <li
              className="linkNav"
              onClick={changeClass}
              data-category="alimento para aves"
            >
              Alimento para Aves
            </li>
            <li
              className="linkNav"
              onClick={changeClass}
              data-category="alimento para perros"
            >
              Alimento para Perros
            </li>
            <li
              className="linkNav"
              onClick={changeClass}
              data-category="alimento para gatos"
            >
              Alimento para Gatos
            </li>
            <li
              className="linkNav"
              onClick={changeClass}
              data-category="accesorios"
            >
              Accesorios
            </li>
            <li
              className="linkNav"
              onClick={changeClass}
              data-category="juguetes"
            >
              Juguetes
            </li>
            <li
              className="linkNav"
              onClick={changeClass}
              data-category="utiles de aseo"
            >
              Productos de Higiene
            </li>
            <div id="img-nav-prod">
              <img src={img} alt="cuidado-de-mascotas" />
            </div>
          </ul>
        </Col>
        <div className="d-flex justify-content-center  flex-sm-row flex-wrap mt-4 justify-content-sm-evenly justify-content-md-start ms-md-3">
          {Prods}
        </div>
      </div>
    </>
  );
}
