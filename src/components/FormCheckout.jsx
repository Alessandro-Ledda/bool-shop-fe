import { useState } from "react";

function FormCheckout() {
  const [formDataCustomer, setFormDataCustomer] = useState({
    customer_first_name: "",
    customer_last_name: "",
    customer_email: "",
    customer_phone: "",
    customer_address: "",
    customer_city: "",
    customer_cap: "",
    coupon_code: "",
  });

  const handleChange = (e) => {
    setFormDataCustomer({
      ...formDataCustomer,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dati inviati:", formDataCustomer);
  };

  return (
    <form
      className="container p-4 bg-light rounded shadow-sm"
      onSubmit={handleSubmit}
    >
      <h3 className="mb-4">Dati Cliente</h3>

      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={formDataCustomer.customer_first_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="cognome" className="form-label">
            Cognome
          </label>
          <input
            type="text"
            className="form-control"
            id="cognome"
            value={formDataCustomer.customer_last_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formDataCustomer.customer_email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="telefono" className="form-label">
            Telefono
          </label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            value={formDataCustomer.customer_phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="indirizzo" className="form-label">
            Indirizzo di fatturazione
          </label>
          <input
            type="text"
            className="form-control"
            id="indirizzo"
            value={formDataCustomer.customer_address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="citta" className="form-label">
            Città
          </label>
          <input
            type="text"
            className="form-control"
            id="citta"
            value={formDataCustomer.customer_city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="cap" className="form-label">
            CAP
          </label>
          <input
            type="text"
            className="form-control"
            id="cap"
            value={formDataCustomer.customer_cap}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12 mt-3">
          <label htmlFor="coupon" className="form-label">
            COUPON
          </label>
          <input
            type="text"
            className="form-control"
            id="coupon"
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
