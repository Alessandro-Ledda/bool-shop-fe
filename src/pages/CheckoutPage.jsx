import { Link } from "react-router-dom";
//importo form
import FormCheckout from "../components/FormCheckout";
import CartPreview from "../components/CartPreview";
import CartPage from "./CartPage";

function CheckoutPage() {
  return (
    <>
      <div className="top-nav-bar">
        <Link className="back-link" to="/">
          ← Ritorna alla Home
        </Link>
      </div>
      <CartPage />
      <FormCheckout />
    </>
  );
}

export default CheckoutPage;
