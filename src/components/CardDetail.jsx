



import { Link } from "react-router-dom"
import { useCart } from "../contexts/CartContext"

export default function CardDetail({ product }) {
    // Controllo di sicurezza se il prodotto non è ancora caricato
    if (!product) {
        return <div style={{ paddingTop: "200px", textAlign: "center" }}>Caricamento prodotto...</div>;
    }
    const { addToCart } = useCart();
    return (
        <div className="product-page-wrapper">

            {/* 1. NAVIGAZIONE SUPERIORE (Discreta) */}
            <div className="top-nav-bar">
                <Link className="back-link" to="/">← Ritorna alla Home</Link>
            </div>

            {/* 2. SEZIONE PRINCIPALE NERA (Stile Lacertosus) */}
            <div id="card-product">
                {/* Colonna Sinistra: Immagine Prodotto */}
                <div className="detail-image-container">
                    <img
                        className="img-detail"
                        src={product.image_url}
                        alt={product.name}
                    />
                </div>

                {/* Colonna Destra: Informazioni e Specifiche */}
                <div className="product-info-content">
                    <span className="brand-tag">Professional Gym Equipment</span>
                    <h1 className="detail-title">{product.name}</h1>

                    <div className="detail-description">
                        <p>{product.description}</p>
                    </div>

                    <div className="specs-container">
                        <ul>
                            <li><strong>DESCRIZIONE:</strong> {product.details}</li>
                            <li><strong>MODELLO:</strong> {product.model}</li>
                            <li><strong>DIMENSIONI:</strong> {product.dimensions}</li>
                            <li><strong>PESO:</strong> {product.weight}</li>
                            <li><strong>GARANZIA:</strong> {product.warranty}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 3. BARRA STICKY IN FONDO (Per spingere l'acquisto) */}
            <div className="sticky-purchase-bar">
                <div className="sticky-container">
                    {/* Info Prodotto (Miniatura e Nome) */}
                    <div className="sticky-info">
                        <img src={product.image_url} alt="mini-thumb" className="mini-thumb" />
                        <span className="sticky-name">{product.name}</span>
                    </div>

                    {/* Azioni (Prezzo e Bottone) */}
                    <div className="sticky-actions">
                        <span className="sticky-price">{product.price}€</span>
                        <button className="btn-buy-now" onClick={() => addToCart(product)}>
                            Aggiungi al carrello
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}







