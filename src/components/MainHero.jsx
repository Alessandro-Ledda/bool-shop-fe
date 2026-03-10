import { Carousel } from "react-bootstrap";

function HeroCarousel() {
  return (
    <Carousel className="padding">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../public/hero1.jpg"
          alt="Prima slide"
        />
        <Carousel.Caption>
          <h3>Lat Machine Professionale</h3>
          <p>
            Massima efficacia per dorsali e spalle, occupando pochissimo spazio
            a casa.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../public/hero2.webp"
          alt="Seconda slide"
        />
        <Carousel.Caption>
          <h3>Home Gym Compatta</h3>
          <p>
            Tutti gli esercizi in un unico macchinario, massimi risultati con
            minima ingombro.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../public/hero3.jpg"
          alt="Terza slide"
        />
        <Carousel.Caption>
          <h3>Set di Manubri Regolabili</h3>
          <p>
            Allenamento completo in poco spazio, qualità professionale per ogni
            esercizio.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../public/hero4.webp"
          alt="Prima slide"
        />
        <Carousel.Caption>
          <h3>Bilanciere Professionale per Squat</h3>
          <p>
            : Resistente e compatto, ideale per massimizzare i risultati senza
            sacrificare spazio.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;
