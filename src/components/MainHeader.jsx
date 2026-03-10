// import link
import { Link } from "react-router-dom"

function MainHeader() {
    return (
        <header>
            <Link className="logo">BoolShop</Link>
            <nav className="navbar">
                <ul>
                    <li><Link to={"/"}>homePage</Link></li>
                    <li><Link>WhishList</Link></li>
                    <li><Link>Cart</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader