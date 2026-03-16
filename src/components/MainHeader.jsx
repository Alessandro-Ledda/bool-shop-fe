// import link
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/boolshop-logo-2nd.svg";
// import context
import { useApi } from "../contexts/ApiProvider";
import { useCart } from "../contexts/CartContext";

function MainHeader() {
  const navigate = useNavigate();
  const { cart } = useCart();

  const [search, setSearch] = useState("");

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value.trim();
  //   setSearch(value);
  //   const searchQuery = value;

  //   if (searchQuery) {
  //     navigate(`/search?cu=${encodeURIComponent(searchQuery)}`);
  //   }
  // };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Se l'utente cancella tutto → resetta l'URL
    if (value === "") {
      navigate("/search?cu=");
      return;
    }

    // Altrimenti aggiorna normalmente
    navigate(`/search?cu=${encodeURIComponent(value)}`);
  };

  return (
    <>
      <header className="sticky-top d-flex flex-column no-padding">
        {/* Banner  */}
        <div className="py-2 text-center banner">
          <span className="fw-bold text-dark">SPEDIZIONI GRATUITE</span>
          <span className="text-dark ms-1">SU ORDINI SOPRA I 100&euro;</span>
        </div>
        {/* Navbar */}
        <div className="main-header d-flex justify-content-between align-items-center">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="my-search-bar form-control-plaintext "
              placeholder="Cerca il tuo prodotto"
              value={search}
              onChange={handleSearch}
            />
          </form>
          <nav className="navbar">
            <ul>
              <Link to={"/wishlist"}>
                <FontAwesomeIcon icon={faHeart} color="grey" />
              </Link>
              <Link to={"/cart"}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  color="grey"
                  className="me-5"
                />
                {cart.length > 0 && (
                  <div className="container-badge">
                    <p>
                      <span className="badge-cart">{cart.length}</span>
                    </p>
                  </div>
                )}
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
