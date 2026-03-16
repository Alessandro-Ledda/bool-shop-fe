import axios from "axios";
import { useState, useEffect } from "react";
import { useApi } from "../contexts/ApiProvider";
import { Link } from "react-router-dom";
const endpoint = import.meta.env.VITE_APP_URL;
import { useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import FilterSelect from "../components/FilterSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical, faList } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";

export default function SearchPage() {
  const { setIsLoading } = useApi();
  const { addToCart } = useCart();

  // var di stato per funzione cuore wishlist
  const [inWishlist, setInWishlist] = useState({});
  // var di stato per array di prodotti
  const [filteredProducts, setFilteredProducts] = useState([]);
  // var di stato per layout tasti griglia e lista
  const [layout, setLayout] = useState("grid");
  // var di stato per order dinamico per select passato a componente
  const [order, setOrder] = useState("");
  // var di stato per componente per filter discount
  const [isFilterOn, setIsFilterOn] = useState(false);
  // verifica se siamo su pagina di search per ricerca da barra header
  const location = useLocation();
  const onSearchPage = location.pathname === "/search";
  // var per prendere query da url
  // const queryParams = new URLSearchParams(location.search);
  // const searchFromUrl = queryParams.get("cu") || "";
  const queryParams = new URLSearchParams(location.search);
  const searchFromUrl = queryParams.get("cu") ?? "";
  const normalizedSearch = searchFromUrl.trim();
  // var per verifica se filtro è attivo e modifico url con valore preso da parametro cu che corrisponde al search dell'utente
  const myUrl = isFilterOn
    ? `${endpoint}api/products?order=${order}&searched=${normalizedSearch}&discount=${isFilterOn}`
    : `${endpoint}api/products?order=${order}&searched=${normalizedSearch}`;

  // funzione per settare il prodotto a wishlist
  function setWishlist(productId) {
    setInWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  }

  function fetchProduct() {
    // if (!searchFromUrl || searchFromUrl.length < 2 && !onSearchPage) {
    //     setFilteredProducts([]);
    //     return;
    // }

    if (normalizedSearch === "") {
      // pulisce l'URL eliminando ?cu=
      window.history.replaceState({}, "", "/search?cu=");

      setIsLoading(true);
      axios
        .get(`${endpoint}api/products?order=${order}&discount=${isFilterOn}`)
        .then((res) => setFilteredProducts(res.data))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
      return;
    }

    setIsLoading(true);
    axios
      .get(myUrl)
      .then((res) => {
        setFilteredProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchProduct();
  }, [searchFromUrl, order, isFilterOn]);

  return (
    <div
      id="search-card-list"
      className="row container justify-content-center m-auto gy-5 pb-5"
    >
      <div className="layout-buttons">
        <button
          onClick={() => setLayout("grid")}
          className={
            layout === "grid" ? "btn-active me-3" : "btn-not-active me-3"
          }
        >
          <FontAwesomeIcon icon={faGripVertical} />
        </button>
        <button
          onClick={() => setLayout("list")}
          className={layout === "list" ? "btn-active" : "btn-not-active"}
        >
          <FontAwesomeIcon icon={faList} />
        </button>
      </div>

      <FilterSelect
        order={order}
        setOrder={setOrder}
        isFilterOn={isFilterOn}
        setIsFilterOn={setIsFilterOn}
      />
      <div className="row justify-content-center gy-4">
        {layout === "grid"
          ? filteredProducts.map((product) => (
              <div key={product.id} className="search-grid-card col-3 me-2">
                <button
                  className="wishlist-icon"
                  onClick={() => setWishlist(product.id)}
                >
                  <span>
                    <FontAwesomeIcon
                      color="#F09226"
                      icon={inWishlist[product.id] ? fasHeart : farHeart}
                    />
                  </span>
                </button>
                <Link to={`/products/${product.slug}`}>
                  {product.discount_percentage ? (
                    <div className="d-flex justify-content-center mb-2">
                      <span className="sale-badge">SALE</span>
                    </div>
                  ) : null}
                  <img
                    className="img-detail-grid"
                    src={product.image_url}
                    alt={product.name}
                  />
                  <h1 className="text-dark">{product.name}</h1>
                </Link>
                <p>{product.description}</p>
                {product.discount_percentage ? (
                  <>
                    <div className="d-flex justify-content-between">
                      <p className="fw-bold d-inline search-price text-decoration-line-through">
                        {product.price}€
                      </p>
                      <span className="discounted-badge">
                        {`${product.discount_percentage} %`}
                      </span>
                    </div>
                    <span className="fw-bold fs-5 search-price">
                      {` ${(product.price - (product.price * product.discount_percentage) / 100).toFixed(2)}€`}
                    </span>
                  </>
                ) : (
                  <p className="fw-bold search-price">{`${product.price}€`}</p>
                )}
                <div className="add-cart">
                  <button
                    onClick={() => addToCart(product)}
                    className="search-button mb-3"
                  >
                    Aggiungi al carrello
                  </button>
                </div>
              </div>
            ))
          : filteredProducts.map((product) => (
              <div key={product.id} className="col-12">
                <Link to={`/products/${product.slug}`}>
                  <div className="card search-list-card d-flex flex-row justify-content-between">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-25"
                    />
                    <div className="search-list-description ms-3 mt-2 flex-grow-1">
                      {product.discount_percentage ? (
                        <div className="d-flex flex-start me-4 mb-2">
                          <span className="sale-badge">SALE</span>
                        </div>
                      ) : null}
                      <h3 className="search-list-title fw-bold w-100">
                        {product.name}
                      </h3>
                      <p className="fs-5">{product.description}</p>
                      {product.discount_percentage ? (
                        <>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="fw-bold d-inline search-price mb-0 text-decoration-line-through">
                              {product.price}€
                            </p>
                            <span className="calc-price fw-bold fs-5 search-price">
                              {` ${(product.price - (product.price * product.discount_percentage) / 100).toFixed(2)}€`}
                            </span>
                            <span className="discounted-badge me-5">
                              {`${product.discount_percentage} %`}
                            </span>
                          </div>
                        </>
                      ) : (
                        <p className="fw-bold search-price">{`${product.price}€`}</p>
                      )}
                    </div>
                    <div className="add-cart me-5 align-self-center">
                      <button
                        onClick={() => addToCart(product)}
                        className="search-button"
                      >
                        Aggiungi al carrello
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}
