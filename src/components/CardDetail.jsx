import { Link } from "react-router-dom"

export default function CardDetail({ product }) {
    return (
        <div id="card-product">
            <div className="page-container">
                <img src={product.image_url} alt={product.name} />
            </div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.details}</p>
            <div>{product.price}</div>
            <Link className="btn" to="/">Ritorna alla Home</Link>
        </div>
    )
}