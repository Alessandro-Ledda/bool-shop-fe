// import link
import { Link } from "react-router-dom"

function MainHeader() {
    return (
        <header>
            <Link className="logo">BoolShop</Link>
            <nav className="navbar">
                <div className="container">
                    <div className="navigation">
                        <ul>
                            <li><Link>homePage</Link></li>
                            <li><Link>All product</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default MainHeader