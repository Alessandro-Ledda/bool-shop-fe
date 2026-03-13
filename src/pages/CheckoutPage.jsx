import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
//importo form
import FormCheckout from "../components/FormCheckout";
import CartPreview from "../components/CartPreview";
import CartPage from "./CartPage";

//importo stile
import "../styles/CheckoutPageStyle.css";

function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
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

      <div className="row g-4">
        <div className="col-12 col-xxl-6">
          <div className="cart-wrapper shadow-sm p-3 rounded">
            <CartPreview />

            <div className="cart-footer">
              <h4 className="fw-semibold">Totale: € 250</h4>

              <button
                className="search-button mt-3"
                onClick={() => {
                  if (
                    window.confirm(
                      "Sei sicuro di voler svuotare il tuo carrello?",
                    )
                  ) {
                    clearCart();
                    navigate("/");
                  }
                }}
              >
                Svuota Carrello
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-xxl-6">
          <div className="shadow-sm p-3 rounded bg-white">
            <FormCheckout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
