import { Link } from "react-router-dom";
//importo form
import FormCheckout from "../components/FormCheckout";
import CartPreview from "../components/CartPreview";
import CartPage from "./CartPage";

function CheckoutPage() {
  return (
    <div className="container">
      <div className="top-nav-bar">
        <Link className="back-link" to="/">
          ← Ritorna alla Home
        </Link>
      </div>
      <CartPreview />
      <FormCheckout />
    </div>
  );
}

export default CheckoutPage;
