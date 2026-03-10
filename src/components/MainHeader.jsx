// import link
import { Link } from "react-router-dom"

function MainHeader() {
    return (
        <header className="main-header">
            <Link to={"/"}><img src="src\assets\boolshop-logo-2nd.svg" alt="" /></Link>
            <nav className="navbar">
                <ul>
                    <li><Link>WhishList</Link></li>
                    <li><Link>Cart</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader