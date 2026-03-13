

import { Link } from "react-router-dom"
import { useState } from "react";
import { useCart } from "../contexts/CartContext"


export default function CardDetail({ product }) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = () => {
        setQuantity(count => count + 1);
    };

    const { addToCart, decreseFromCart } = useCart();
    return (
        <div className="product-page-wrapper">
            <div className="top-nav-bar">
                <Link className="back-link" to="/">← Torna alla Home</Link>
            </div>

            {/* SEZIONE NERA */}
            <section className="detail-black-section">
                <div className="container-inner">
                    <div className="image-column">
                        <img className="img-detail-main" src={product.image_url} alt={product.name} />
                    </div>

                    <div className="text-column">
                        <span className="brand-tag">Lacertosus Design</span>
                        <h2 className="section-title">{product.name}</h2>
                        <div className="description-text">
                            <p>{product.description}</p>
                            <br />
                            <p><strong>DETTAGLI:</strong> {product.details}</p>
                        </div>
                    </div>
                </div>

                {/* Scheda tecnica */}
                <div className="technical-details">
                    <h3>Dettagli Tecnici</h3>
                    <ul className="technical-list">
                        <li><strong>Modello:</strong> {product.model}</li>
                        <li><strong>Peso:</strong> {product.weight}</li>
                        <li><strong>Dimensioni:</strong> {product.dimensions}</li>
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
                    <div className="sticky-actions">
                        <div className="col-6 col-md-2 d-flex align-items-center mt-2 mt-md-0">
                            <button
                                className="btn btn-outline-secondary btn-sm me-2"
                            /* onClick={() => decreseFromCart(item)}*/
                            >
                                -
                            </button>
                            <span>{quantity}</span>
                            <button
                                className="btn btn-outline-secondary btn-sm ms-2"
                                onClick={() => handleQuantityChange}
                            >
                                +
                            </button>
                        </div>
                        <span className="sticky-price">{(product.price * quantity).toFixed(2)}€</span>
                        <button className="search-button mb-3" onClick={() => addToCart({ ...product, quantity: quantity })}>Aggiungi al carrello</button>
                    </div>
                </div>
            </div>
        </div>
    )
}






