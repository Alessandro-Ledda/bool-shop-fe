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

  return (
    <div className="product-page-wrapper">
      <div className="top-nav-bar">
        <Link className="back-link" to="/">
          ← Torna alla Home
        </Link>
      </div>

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
            <span className="brand-tag">Lacertosus Design</span>
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

        {/* Scheda tecnica */}
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
          </ul>
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
              className="btn-buy-now"
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
