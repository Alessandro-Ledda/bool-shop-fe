import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
//importo form
import FormCheckout from "../components/FormCheckout";
import CartPreview from "../components/CartPreview";
import CartPage from "./CartPage";
import axios from "axios";

//importo stile
import "../styles/CheckoutPageStyle.css";

function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  // var di stato per gestire coupon
  const [couponCheckBox, setCouponCheckBox] = useState(false);
  const [couponInput, setCouponInput] = useState("");
  const [discountedTotal, setDiscountedTotal] = useState();

  const [couponValid, setCouponValid] = useState(false);

  const couponValidator = (e) => {
    const endpoint = `http://localhost:3000/api/coupons/${couponInput}`;
    // console.log(`${couponInput} - couponInput`);
    e.preventDefault();
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res.data);
        if (res.data.valid) {
          setCouponValid(true);
          const discountPercentage = res.data.coupon_percentage;
          console.log(discountPercentage + "discountP%");
          const newTotal = ((total * (100 - discountPercentage)) / 100).toFixed(
            2,
          );
          setDiscountedTotal(newTotal);

          // svuota campi form (e var di stato)
          setCouponInput("");
          // deve sparire ora l'input e il checkbox
        } else {
          setDiscountedTotal(null);
          alert(res.data.message); // coupon non valido
        }
        //
      })
      .catch((err) => {
        //console.log(err);
        // if (err.status === 400) window.alert(err.response.data.error);
        // if (err.status === 500) redirect("/500_error_internal_server");
      });
    // .finally(() => setIsLoading(false));
  };

  const total = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

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
              {/* chekbox coupon*/}
              <div className="form-check mt-2 ms-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="couponCode"
                  checked={couponCheckBox}
                  onChange={() => setCouponCheckBox(!couponCheckBox)}
                />
                <label className="form-check-label" htmlFor="couponCode">
                  Inserisci un codice sconto
                </label>
              </div>
              {/* qui metto l'input txt dell coupon con bottone submit per verificarne esistenza e validità */}
              <div className="col-12 mb-5 ">
                {couponCheckBox && (
                  <form onSubmit={couponValidator}>
                    <label
                      htmlFor="coupon_code"
                      className="form-label text-uppercase small fw-semibold"
                    ></label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="coupon_code"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="INSERISCI COUPON"
                    />
                    <button className="search-button" type="submit">
                      {" "}
                      Verifica{" "}
                    </button>
                  </form>
                )}
              </div>

              {/* se valido deve comparirmi sotto totale il prezzo aggiornato */}
              {couponValid ? (
                <div className="d-flex align-items-center">
                  <span className="fs-3 fw-bold">Totale:</span>
                  <span className="fw-semibold fs-4 ms-2 search-price text-decoration-line-through text-align-center">
                    {total}
                  </span>
                  <span className="ms-2 fw-semibold fs-4 search-price">{discountedTotal}  &euro;</span>
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  <span className="fs-3 fw-bold">Totale:</span>
                  <span className="fw-semibold fs-4 ms-2 search-price text-align-center">
                    {total}
                  </span>
                </div>

              )}

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
