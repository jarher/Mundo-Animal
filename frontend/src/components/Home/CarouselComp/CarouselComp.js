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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img_2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img_3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

