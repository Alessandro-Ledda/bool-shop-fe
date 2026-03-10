import { Link } from "react-router-dom";

export default function ProductCard({ productProp }) {
<<<<<<< HEAD
    return (
        <div className="card-list card ">
            <Link to={`/products/${productProp.slug}`}>
                <figure className="my-figure">
                    <img className="img-card-list" src={productProp.image_url} alt={productProp.name} />
                </figure>
                <figcaption>
                    <div className="product-title">{productProp.name}</div>
                </figcaption>
            </Link>
            <div className="product-price">{productProp.price}</div>
            <button className="btn btn-primary">Aggiungi al carrello</button>

        </div >
    )
}
=======
  return (
    <Link to={`/products/${productProp.slug}`} className="card-link">
      <img
        src={productProp.image_url}
        alt={productProp.name}
        className="card-image"
      />
      <p className="badge">{productProp.description}</p>
      <h2 className="card-title">{productProp.name}</h2>
      <button className="card-button material-symbols-rounded">
        arrow_forward
      </button>
    </Link>
  );
}
>>>>>>> main-test
