import { Link } from "react-router-dom"

export default function CardDetail({ product }) {
    return (
        <div id="card-product">
            <div className="page-container">
                <img className="img-detail" src={product.image_url} alt={product.name} />
            </div>
            <div className="product-detail">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>DESCRIZIONE: {product.details}</p>
                <p>PREZZO: {product.price}</p>
                <p>MODELLO: {product.model}</p>
                <p>DIMENSIONI: {product.dimensions}</p>
                <p>GARANZIA: {product.warranty}</p>
                <p>PESO: {product.weight}</p>
                <Link className="btn btn-primary " to="/">Ritorna alla Home</Link>
            </div>
        </div>
    )
}