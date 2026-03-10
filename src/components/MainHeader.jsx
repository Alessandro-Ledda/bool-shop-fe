// import link
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <>
      {/* Banner  */}
      <div className="py-2 text-center banner">
        <span className="fw-bold text-dark">SPEDIZIONI GRATUITE</span>
        <span className="text-dark ms-1">SU ORDINI SOPRA I 100&euro;</span>
      </div>
      <header>
        <Link className="logo">BoolShop</Link>
        <nav className="navbar">
          <ul>
            <li>
              <Link to={"/"}>homePage</Link>
            </li>
            <li>
              <Link>WhishList</Link>
            </li>
            <li>
              <Link>Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
