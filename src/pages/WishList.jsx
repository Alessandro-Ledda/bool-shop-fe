import { Link } from "react-router-dom";
import { useApi } from "../contexts/ApiProvider";
import { useWishlist } from "../contexts/WishlistContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function WishList() {
  const { products } = useApi();
  const { wishlist, removeFromWishlist } = useWishlist();

  if (!products) return <p>Caricamento prodotti...</p>;

  const wishListProducts = products.filter((product) =>
    wishlist.includes(product.id),
  );

  // scroll to top quando il prodotto viene caricato
  useEffect(() => {
    if (wishListProducts.length > 0) {
      window.scrollTo(0, 0);
    }
  }, [wishListProducts]);
    return (
        <div className="container-wishlist">
            <div className="content-wishlist">
                <Link className="back-link p-5" to="/">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Torna alla Home
                </Link>
                <h1 className="title text-center mb-5">Lista Desideri</h1>

  return (
    <div className="container-wishlist">
      <div className="content-wishlist">
        <h1 className="title text-center mb-5">Lista Desideri</h1>

        {wishListProducts.length === 0 ? (
          <p className="text-center">La wishlist è vuota</p>
        ) : (
          wishListProducts.map((product) => (
            <div className="col-12 col-md-10 mx-auto mb-3" key={product.id}>
              <div className="card shadow-sm rounded-3">
                <div className="row g-0 align-items-center p-3">
                  <div className="col-4 col-md-2 text-center">
                    {product?.image_url && (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="img-fluid rounded"
                        style={{ maxHeight: "100px", objectFit: "contain" }}
                      />
                    )}
                  </div>

                  <div className="col-4 col-md-6">
                    <Link to={`/products/${product.slug}`}>
                      <h5 className="text-dark">{product.name}</h5>
                    </Link>
                    <span>{product.description}</span>
                  </div>

                  <div className="col-2 text-end">
                    <p>{product.price}€</p>
                  </div>

                  <div className="col-12 col-md-2 text-end mt-2 mt-md-0">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromWishlist(product.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} color="white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WishList;
