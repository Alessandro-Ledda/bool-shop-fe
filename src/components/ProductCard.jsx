import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function ProductCard({ productProp }) {
  const { addToCart } = useCart();

  return (

    <>
      <Link to={`/products/${productProp.slug}`} className="card-link">
        <img
          src={productProp.image_url}
          alt={productProp.name}
          className="card-image"
        />
        <p className="badge">{productProp.description}</p>
        <h2 className="card-title">{productProp.name}</h2>

        {productProp.discount_percentage ? (
          <>
            <div className="d-flex justify-content-between">
              <p className="fw-bold d-inline search-price text-decoration-line-through">
                {productProp.price}€
              </p>
              <span className="discounted-badge">
                {`${productProp.discount_percentage} %`}
              </span>
            </div>
            <span className="fw-bold fs-5 search-price-homepage">
              {` ${(productProp.price - (productProp.price * productProp.discount_percentage / 100)).toFixed(2)}€`}
            </span>
          </>
        ) : (
          <p className="fw-bold search-price">{`${productProp.price}€`}</p>
        )}
        <button className="card-button material-symbols-rounded">
          arrow_forward
        </button>
      </Link>
      <button onClick={() => addToCart(productProp)} className="search-button mb-2 mt-4">
        Aggiungi al carrello
      </button>

    </>

  );
}
