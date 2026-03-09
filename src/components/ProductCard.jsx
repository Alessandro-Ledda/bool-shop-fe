import { Link } from "react-router-dom";


export default function ProductCard({ productProp }) {
    return (
        <div className="card border border-3 col-4 border-primary-subtle bg-secondary-subtle">
            <Link to={`/products/${productProp.slug}`}>
                <figure className="my-figure">
                    <img src={productProp.image_url} alt={productProp.name} />
                </figure>
                <figcaption>
                    <div className="product-title">{productProp.name}</div>
                </figcaption>
            </Link>
            <div className="product-price">{productProp.price}</div>
            <button className="btn">Aggiungi al carrello</button>

        </div >
    )
}