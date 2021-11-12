import { Carousel } from "react-bootstrap";
import img_1 from "../../../assets/images/cat-1000x460.jpg";
import img_2 from "../../../assets/images/mundo-animal-banner-md.png";
import img_3 from "../../../assets/images/dogs-1000x460.png";

export default function CarouselComp () {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img_1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Los productos con la mejor calidad</h3>
            <p>Los encuentras aquí</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img_2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img_3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Dale a tu mascota</h3>
            <p>
              El mejor cuidado y la nutrición adecuada.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

