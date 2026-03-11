import { Link } from "react-router-dom"

function CartPage() {
    return (
        <>
            <h1 className="title-page">sono la pagina carrello</h1>
            <Link className="btn btn-primary" to="/">Ritorna alla Home</Link>
        </>
    )
}

export default CartPage