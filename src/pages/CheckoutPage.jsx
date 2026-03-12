import { Link } from "react-router-dom";
//importo form
import FormCheckout from "../components/FormCheckout";
import CartPage from "./CartPage";

function CheckoutPage() {
  return (
    <>
      <CartPage />
      <FormCheckout />
      <Link className="btn btn-primary" to="/">
        Ritorna alla Home
      </Link>
    </>
  );
}

export default CheckoutPage;
