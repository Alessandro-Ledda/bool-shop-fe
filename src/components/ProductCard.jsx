import { Link } from "react-router-dom";

export default function ProductCard({ productProp }) {
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
