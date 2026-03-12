import { useCart } from "../contexts/CartContext";
import { useApi } from "../contexts/ApiProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart, addToCart, decreseFromCart } = useCart();
  const { products } = useApi();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      <h1 className="title">Riepilogo Carrello</h1>
      {cart.length === 0 && <p>Il carrello è vuoto</p>}
      {cart.map((item) => {
        // trova il prodotto completo dal backend
        const product = products.find((p) => p.id === item.id);

        return (
          <div className="col-12 col-md-10 mx-auto mb-3" key={item.id}>
            <div className="card shadow-sm rounded-3">
              <div className="row g-0 align-items-center p-3">
                {/* imgs */}
                <div className="col-4 col-md-2 text-center">
                  {product?.image_url && (
                    <img
                      src={product.image_url}
                      alt={item.name}
                      className="img-fluid rounded"
                      style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                  )}
                </div>

                {/* info product */}
                <div className="col-8 col-md-4">
                  <h5 className="mb-1">{item.name}</h5>
                  {product?.description && (
                    <p className="mb-0 text-muted small">
                      {product.description}
                    </p>
                  )}
                </div>

                {/* quantity */}
                <div className="col-6 col-md-2 d-flex align-items-center mt-2 mt-md-0">
                  <button
                    className="btn btn-outline-secondary btn-sm me-2"
                    onClick={() => decreseFromCart(item)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm ms-2"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>

                {/* price */}
                <div className="col-6 col-md-2 text-md-end mt-2 mt-md-0">
                  <span className="d-block fw-bold">
                    {(item.price * item.quantity).toFixed(2)}€
                  </span>
                  <small className="text-muted">({item.price}€/pz)</small>
                </div>

                {/* trash */}
                <div className="col-12 col-md-2 text-end mt-2 mt-md-0">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} color="white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="wrap-total">
        <p className="totale"><strong>Totale :</strong> {total}€</p>
      </div>

      <Link to={"/checkout"}>
        <button>Vai al checkout</button>
      </Link>
    </div>
  );
}

export default CartPage;
