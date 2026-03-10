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
          <h3>Promo Estate</h3>
          <p>Scopri la nostra collezione di attrezzi fitness</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../public/hero2.webp"
          alt="Seconda slide"
        />
        <Carousel.Caption>
          <h3>Offerta Speciale</h3>
          <p>Spedizione gratuita su ordini sopra i 50&euro;</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../public/hero3.jpg"
          alt="Terza slide"
        />
        <Carousel.Caption>
          <h3>Nuovi Arrivi</h3>
          <p>Attrezzi di qualità per la tua palestra in casa</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../public/hero4.webp"
          alt="Prima slide"
        />
        <Carousel.Caption>
          <h3>Promo Estate</h3>
          <p>Scopri la nostra collezione di attrezzi fitness</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;
