
import Cards from "./Cards/Cards";
import CarouselComp from "./CarouselComp/CarouselComp";

function Home() {
  return (
    <>
      <div>
        <CarouselComp />
        <Cards />
        <div id="map" className="d-flex flex-column align-items-center">
          
            <h5 className="text-center">Ubicación</h5>
            <iframe
              id="map-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.0723742216746!2d-73.77572528524021!3d4.005544097087013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e3914e92f6ced%3A0xb4acfb050b683646!2sPlaza%20de%20Mercado%20Centenaria!5e0!3m2!1ses-419!2sco!4v1632093512607!5m2!1ses-419!2sco"
              allowfullscreen=""
              loading="lazy"
              title="mundo-animal-mapa"
            ></iframe>
          
        </div>
      </div>
    </>
  );
}

export default Home;
