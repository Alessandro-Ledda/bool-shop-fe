import { useEffect, useState } from "react";
import axios from "axios";
//richiamo il contesto del carrello
import { useCart } from "../contexts/CartContext";

function FormCheckout() {
  //prendo cart dal contesto del carrello
  const { cart } = useCart();

  //creo array di oggetti dei prodotti che devo mandare al DB
  const products = cart.map((product) => ({
    product_id: product.id,
    unit_quantity: product.quantity,
  }));

  const initialFormDataCustomer = {
    customer_first_name: "",
    customer_last_name: "",
    customer_email: "",
    customer_phone: "",
    customer_address: "",
    customer_city: "",
    customer_cap: "",
    coupon_code: "",
  };
  const [formDataCustomer, setFormDataCustomer] = useState(
    initialFormDataCustomer,
  );
  //creo oggetto in cui salvare l'oggetto finale da mandare in post al BE
  const [objPost, setObjPost] = useState({});
  useEffect(
    () => setObjPost({ ...formDataCustomer, products: products }),
    [formDataCustomer],
  );

  const handleChange = (e) => {
    setFormDataCustomer({
      ...formDataCustomer,
      [e.target.id]: e.target.value,
    });
  };

  const endpoint = "http://localhost:3000/api/orders/";
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(endpoint, objPost, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        // svuota campi form (e var di stato)
        setFormDataCustomer(initialFormDataCustomer);
        // ri-esegui funzione di chiamata su page padre
        //reloadReviews();
      })
      .catch((err) => {
        console.log(err);
        if ((err.status = 500)) redirect("/500_error_internal_server");
      });
  };

  return (
    <form
      className="container p-4 bg-light rounded shadow-sm"
      onSubmit={handleSubmit}
    >
      <h3 className="mb-4">Dati Cliente</h3>

      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="customer_first_name" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="customer_first_name"
            value={formDataCustomer.customer_first_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="customer_last_name" className="form-label">
            Cognome
          </label>
          <input
            type="text"
            className="form-control"
            id="customer_last_name"
            value={formDataCustomer.customer_last_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="customer_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="customer_email"
            value={formDataCustomer.customer_email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="customer_phone" className="form-label">
            Telefono
          </label>
          <input
            type="tel"
            className="form-control"
            id="customer_phone"
            value={formDataCustomer.customer_phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="customer_address" className="form-label">
            Indirizzo di fatturazione
          </label>
          <input
            type="text"
            className="form-control"
            id="customer_address"
            value={formDataCustomer.customer_address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="customer_city" className="form-label">
            Città
          </label>
          <input
            type="text"
            className="form-control"
            id="customer_city"
            value={formDataCustomer.customer_city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="customer_cap" className="form-label">
            CAP
          </label>
          <input
            type="text"
            className="form-control"
            id="customer_cap"
            value={formDataCustomer.customer_cap}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12 mt-3">
          <label htmlFor="coupon_code" className="form-label">
            COUPON
          </label>
          <input
            type="text"
            className="form-control"
            id="coupon_code"
            value={formDataCustomer.coupon_code}
            onChange={handleChange}
            placeholder="INSERISCI COUPON"
            minLength={5}
            maxLength={5}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-4 w-100">
        Conferma Dati
      </button>
    </form>
  );
}

export default FormCheckout;
