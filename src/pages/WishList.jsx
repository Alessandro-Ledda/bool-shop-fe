import { Link } from "react-router-dom"

function WishList() {
    return (
        <>
            <h1 className="title-page">sono la wishlist </h1>
            <Link className="btn btn-primary" to="/">Ritorna alla Home</Link>
        </>
    )
}

export default WishList