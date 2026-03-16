import { Link } from "react-router-dom"
import { useApi } from "../contexts/ApiProvider"
import { useWishlist } from "../contexts/wishlistContext"

function WishList() {

    // var per consumare il contesto
    const { products } = useApi();
    const { wishlist, removeFromWishlist } = useWishlist();

    if (!products) return <p>Caricamento prodotti...</p>

    const wishListProducts = products?.filter(product =>
        (wishlist || []).includes(product.id)
    );

    return (
        <>
            <div className="container-wishlist">
                <div className="content-wishlist">
                    <h1 className="title">Lista Desideri</h1>
                    <p>La wishlist è vuota</p>
                    {wishListProducts.map(product => (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.price}€</p>

                            <button
                                onClick={() => removeFromWishlist(product.id)}
                            >Rimuovi</button>

                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default WishList