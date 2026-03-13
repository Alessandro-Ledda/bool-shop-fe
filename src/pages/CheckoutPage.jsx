import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
//importo form
import FormCheckout from "../components/FormCheckout";
import CartPreview from "../components/CartPreview";
import CartPage from "./CartPage";

function CheckoutPage() {
  const { cart } = useCart();
  if (cart.length === 0) {
    return (
      <div className="container d-flex justify-content-center align-items-center container-order-success ">
        <div
          className="bg-white border rounded-3 shadow-sm p-4 p-md-5"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <h1 className="h3 mb-3 text-success text-uppercase fw-semibold">
            INSERISCI PRODOTTI NEL CARRELLO PRIMA DI ACCEDERE AL CHECKOUT
          </h1>
          <Link to="/" className="search-button mb-3 text-black fw-semibold">
            Torna alla Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="top-nav-bar">
        <Link className="back-link" to="/">
          ← Ritorna alla Home
        </Link>
      </div>
      <CartPreview />
      <Link>
        <button className="search-button mb-4"
          onClick={() => {
            if (window.confirm("Sei sicuro di voler svuotare il tuo carrello?")) {
              clearCart();
            }
          }}
        >
          Svuota Carrello</button>
      </Link>
      <FormCheckout />
    </div>
  );
}

export default CheckoutPage;
