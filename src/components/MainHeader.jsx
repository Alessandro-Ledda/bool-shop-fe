// import link
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/boolshop-logo-2nd.svg';

function MainHeader() {
    return (
        <>
            {/* Banner  */}
            <div className="py-2 text-center banner">
                <span className="fw-bold text-dark">SPEDIZIONI GRATUITE</span>
                <span className="text-dark ms-1">SU ORDINI SOPRA I 100&euro;</span>
            </div>
            <header className="main-header">
                <Link to={"/"}><img src={logo} alt="" /></Link>
                <nav className="navbar">
                    <ul>
                        <FontAwesomeIcon icon={faHeart} color="grey" />
                        <li><Link>Cart</Link></li>
                    </ul>

                </nav>
            </header>
        </>
    );



}

export default MainHeader;
