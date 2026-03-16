import { Link } from "react-router-dom";
import { useApi } from "../contexts/ApiProvider";
import { useWishlist } from "../contexts/WishlistContext";

function WishList() {

    const { products } = useApi();
    const { wishlist, removeFromWishlist } = useWishlist();

    if (!products) return <p>Caricamento prodotti...</p>;

    const wishListProducts = products.filter(product =>
        wishlist.includes(product.id)
    );

    return (
        <div className="container-wishlist">
            <div className="content-wishlist">

                <h1 className="title">Lista Desideri</h1>

                {wishListProducts.length === 0 ? (

                    <p>La wishlist è vuota</p>

                ) : (

                    wishListProducts.map(product => (
                        <div key={product.id} className="wishlist-item">

                            <Link to={`/products/${product.slug}`}>
                                <h3>{product.name}</h3>
                            </Link>

                            <p>{product.price}€</p>

                            <button
                                onClick={() => removeFromWishlist(product.id)}
                            >
                                Rimuovi
                            </button>

                        </div>
                    ))

                )}

            </div>
        </div>
    );
}

export default WishList;