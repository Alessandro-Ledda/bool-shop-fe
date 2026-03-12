import { Link, useLocation, useNavigate } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();
  const res_order = location.state;
  !res_order && useNavigate("/404");

  const {
    new_id,
    coupon_valid,
    message_coupon,
    total_order,
    total_order_discount,
  } = res_order;

  return (
    <div className="container d-flex justify-content-center align-items-center container-order-success ">
      <div
        className="bg-white border rounded-3 shadow-sm p-4 p-md-5"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <h1 className="h3 mb-3 text-success text-uppercase fw-semibold">
          Ordine completato
        </h1>

        <p className="text-muted mb-4">
          Grazie per il tuo acquisto. Ecco il riepilogo del tuo ordine.
        </p>

        {/* ID Ordine */}
        <div className="mb-3">
          <h2 className="h6 text-uppercase text-muted mb-1">ID Ordine</h2>
          <p className="fw-semibold">#{new_id}</p>
        </div>

        {/* Coupon */}
        <div className="mb-3">
          <h2 className="h6 text-uppercase text-muted mb-1">Stato coupon</h2>

          <p
            className={`fw-semibold ${
              coupon_valid ? "text-success" : "text-danger"
            }`}
          >
            {message_coupon}
          </p>
        </div>

        {/* Totale ordine */}
        <div className="mb-3">
          <h2 className="h6 text-uppercase text-muted mb-1">Totale ordine</h2>
          <p className="fw-semibold">{total_order} €</p>
        </div>

        {/* Totale scontato */}
        {coupon_valid && (
          <div className="mb-4">
            <h2 className="h6 text-uppercase text-muted mb-1">
              Totale dopo sconti
            </h2>
            <p className="fw-semibold">{total_order_discount} €</p>
          </div>
        )}

        {/* Messaggio finale */}
        <div className="alert alert-success mb-4">
          Il tuo ordine è stato registrato correttamente. Riceverai una email di
          conferma.
        </div>

        <Link
          to="/"
          className="btn btn-primary w-100 text-uppercase fw-semibold"
        >
          Torna alla Home
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
