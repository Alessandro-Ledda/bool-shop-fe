import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";

export default function CardDetail({ product }) {
  const { cart, addToCart, decreseFromCart } = useCart();
  const product_cart = cart.find((prod_cart) => product.id === prod_cart.id);
  const quantity_product_cart = product_cart ? product_cart.quantity : 0;
  const [quantity, setQuantity] = useState(quantity_product_cart);
  useEffect(
    () => setQuantity(quantity_product_cart),
    [quantity, quantity_product_cart],
  );
  const addQuantityChange = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decreseQuantityChange = () => {
    setQuantity((quantity) => quantity - 1);
  };

  console.log(product);

  return (
    <div className="product-page-wrapper">
      <div className="top-nav-bar">
        <Link className="back-link" to="/">
          ← Torna alla Home
        </Link>
      </div>
      {/* ---------------------------------------------------------------- */}
      {/* SEZIONE SUPERIORE - SFONDO NERO */}
      <section className="bg-black bg-gradient text-light py-5">
        <div className="container py-4">
          <div className="row align-items-center g-4">
            {/* IMMAGINE PRINCIPALE */}
            <div className="col-12 col-md-6">
              <img
                src={product.image_url}
                alt={product.name}
                className="img-fluid rounded shadow"
              />
            </div>

            {/* TESTO PRINCIPALE */}
            <div className="col-12 col-md-6">
              <h2 className="fw-bold fs-1 mb-3 text-uppercase">
                {product.name}
              </h2>

              <p className="mb-3 fw-bold">{product.description}</p>

              <p className="mb-0">{product.details}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE INFERIORE - SFONDO GRIGIO */}
      <section className="bg-dark bg-gradient py-5">
        <div className="container py-4">
          <div className="row align-items-center g-4">
            {/* TESTO DETTAGLI TECNICI */}
            <div className="col-12 col-md-6">
              <h3 className="fw-semibold text-warning mb-3 text-uppercase">
                Dettagli Tecnici
              </h3>

              <ul className="list-unstyled text-light fs-5">
                <li className="mb-2">
                  <strong>Modello:</strong> {product.model}
                </li>
                <li className="mb-2">
                  <strong>Peso:</strong> {product.weight}
                </li>
                <li className="mb-2">
                  <strong>Dimensioni:</strong> {product.dimensions}
                </li>
                <li className="mb-2">
                  <strong>Garanzia:</strong> {product.warranty}
                </li>
              </ul>
            </div>

            {/* IMMAGINE DETTAGLI TECNICI */}
            <div className="col-12 col-md-6">
              <img
                src={product.image_details_url}
                alt={`${product.name} - Dettagli tecnici`}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------------------------------------------------- */}
      {/* SEZIONE NERA */}
      <section className="detail-black-section">
        <div className="container-inner">
          <div className="image-column">
            <img
              className="img-detail-main"
              src={product.image_url}
              alt={product.name}
            />
          </div>

          <div className="text-column">
            <h2 className="section-title">{product.name}</h2>
            <div className="description-text">
              <p>{product.description}</p>
              <br />
              <p>
                <strong>DETTAGLI:</strong> {product.details}
              </p>
            </div>
          </div>
        </div>

        <div className="container-inner technical-details">
          <div className="text-column ">
            <div className="technical-details">
              <h3>Dettagli Tecnici</h3>
              <ul className="technical-list">
                <li>
                  <strong>Modello:</strong> {product.model}
                </li>
                <li>
                  <strong>Peso:</strong> {product.weight}
                </li>
                <li>
                  <strong>Dimensioni:</strong> {product.dimensions}
                </li>
                <li>
                  <strong>Garanzia:</strong> {product.model}
                </li>
              </ul>
            </div>
          </div>
          <div className="image-column">
            <img
              className="img-detail-main"
              src={product.image_details_url}
              alt={product.name}
            />
          </div>
        </div>
      </section>

      {/* BARRA STICKY IN FONDO */}
      <div className="sticky-purchase-bar">
        <div className="sticky-container">
          <div className="sticky-info">
            <img src={product.image_url} alt="mini" className="mini-thumb" />
            <span className="sticky-name">{product.name}</span>
          </div>
          <div className="sticky-actions ">
            <div className="col-6 col-md-2 d-flex align-items-center mt-2 mt-md-0 ">
              <button
                className="btn btn-outline-secondary btn-sm me-2"
                onClick={() => {
                  decreseFromCart(product);
                  decreseQuantityChange();
                }}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="btn btn-outline-secondary btn-sm ms-2"
                onClick={() => {
                  addToCart(product);
                  addQuantityChange();
                }}
              >
                +
              </button>
            </div>
            <span className="sticky-price">
              {(product.price * quantity).toFixed(2)}€
            </span>
            <button
              className="search-button mb-3"
              onClick={() => {
                addToCart(product);
              }}
            >
              Aggiungi al carrello
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
