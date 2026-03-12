

import { Link } from "react-router-dom"
import { useState } from "react"

export default function CardDetail({ product }) {

    const [quantity, setQuantity] = useState(1)

    return (
        <div className="product-page-wrapper">
            <div className="top-nav-bar">
                <Link className="back-link" to="/">← Torna alla Home</Link>
            </div>

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
                            <ul className="technical-list">
                                <li><strong>Modello:</strong> {product.model}</li>
                                <li><strong>Peso:</strong> {product.weight}</li>
                                <li><strong>Dimensioni:</strong> {product.dimensions}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sticky-purchase-bar">
                <div className="sticky-container">
                    <div className="sticky-info">
                        <img src={product.image_url} alt="mini" className="mini-thumb" />
                        <span className="sticky-name">{product.name}</span>
                    </div>
                    <div className="sticky-actions">

                        <div className="quantity-selector">
                            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>

                        <span className="sticky-price">{product.price}€</span>

                        <button className="btn-buy-now">
                            Aggiungi al carrello
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

<section className="technical-section">
    <div className="technical-container">

        <h3>Scheda Tecnica</h3>

        <table className="technical-table">
            <tbody>
                <tr>
                    <td>Modello</td>
                    <td>{product.model}</td>
                </tr>

                <tr>
                    <td>Peso</td>
                    <td>{product.weight}</td>
                </tr>

                <tr>
                    <td>Dimensioni</td>
                    <td>{product.dimensions}</td>
                </tr>

                <tr>
                    <td>Brand</td>
                    <td>Lacertosus Design</td>
                </tr>
            </tbody>
        </table>

    </div>
</section>







