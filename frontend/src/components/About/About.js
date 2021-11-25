import { Container, Row } from "react-bootstrap";
import PetDog from "./LottiePet";

function About () {
    return (
      <>
        <Container className="about-cont">
          <h2 className="text-center" id="main-title-info">
            Quienes somos
          </h2>
          <Row className="d-flex flex-col flex-md-row">
            <div className="d-none d-md-block col-sm-3">
              <PetDog />
            </div>

            <div className="col-10 col-sm-8 col-md-6 info-cont p-5 mb-5">
              <h2>¡Bienvenido a Mundo Animal!</h2>
              <p>
                Somos un emprendimiento familiar que nació del amor por las
                mascotas, en casa vivimos con Marcela, -un alcaravan que llegó
                un día a casa herido, lo curamos y cuidamos pero cuando estuvo
                listo para marcharse ya no quería despegarse de nosotros- y
                Juana, -nuestra gata consentida-.
              </p>
              <p>
                A la hora de comprar el alimento de ellas vimos como era difícil
                encontrar todo en un mismo lugar, por eso creamos Mundo Animal,
                dónde puedes seleccionar los mejores productos desde la
                comodidad de tu casa y con solo un click podrán tener todo lo
                que tus mascotas quieran en la comodidad de tu hogar.
              </p>
            </div>
          </Row>
        </Container>
      </>
    );
}

export default About;