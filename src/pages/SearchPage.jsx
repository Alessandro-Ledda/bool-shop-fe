import axios from "axios";
import { useState, useEffect } from "react";
import { useApi } from "../contexts/ApiProvider";
import { Link } from "react-router-dom";
const endpoint = import.meta.env.VITE_APP_URL;
import { useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import FilterSelect from "../components/FilterSelect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical, faList } from '@fortawesome/free-solid-svg-icons'

export default function SearchPage() {
    const { search, setIsLoading } = useApi();
    const { addToCart } = useCart();

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [layout, setLayout] = useState("grid");
    const [order, setOrder] = useState("");
    const location = useLocation();
    const onSearchPage = location.pathname === "/search";

    function fetchProduct() {
        if (!search || search.length < 2 && !onSearchPage) {
            setFilteredProducts([]);
            return;
        }

        setIsLoading(true);
        axios
            .get(`${endpoint}api/products?order=${order}&searched=${search}`)
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
    }, [search, order]);

    return (
        <div id="search-card-list" className="row container justify-content-center m-auto gy-5 pb-5">
            <div className="layout-buttons">
                <button
                    onClick={() => setLayout("grid")}
                    className={layout === "grid" ? "btn-active me-3" : "btn-not-active me-3"}
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

            <FilterSelect order={order} setOrder={setOrder} />

            {layout === "grid" ? (
                filteredProducts.map((product) => (
                    <div key={product.id} className="search-grid-card col-3 me-2">
                        <Link to={`/products/${product.slug}`}>
                            {product.discount_percentage ? (
                                <div className="d-flex justify-content-center mb-2">
                                    <span className="sale-badge">
                                        SALE
                                    </span>
                                </div>
                            ) : null}
                            <img className="img-detail w-100" src={product.image_url} alt={product.name} />
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
                                    {` ${(product.price - (product.price * product.discount_percentage / 100)).toFixed(2)}€`}
                                </span>
                            </>
                        ) : (
                            <p className="fw-bold search-price">{`${product.price}€`}</p>
                        )}
                        <div className="add-cart">
                            <button onClick={() => addToCart(product)} className="search-button mb-3">
                                Aggiungi al carrello
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                filteredProducts.map((product) => (
                    <div key={product.id}>
                        <Link to={`/products/${product.slug}`}>
                            <div className="card search-list-card col-12 w-100 d-flex flex-row justify-content-between">
                                <img src={product.image_url} alt={product.name} className="w-25" />
                                <div className="search-list-description ms-3 mt-5 flex-grow-1">
                                    {product.discount_percentage ? (
                                        <div className="d-flex flex-start me-4 mb-2">
                                            <span className="sale-badge">
                                                SALE
                                            </span>
                                        </div>
                                    ) : null}
                                    <h3 className="search-list-title fw-bold w-100">{product.name}</h3>
                                    <p className="fs-5">{product.description}</p>
                                    {product.discount_percentage ? (
                                        <>
                                            <div className="d-flex justify-content-between">
                                                <p className="fw-bold d-inline search-price text-decoration-line-through">
                                                    {product.price}€
                                                </p>
                                                <span className="discounted-badge me-5">
                                                    {`${product.discount_percentage} %`}
                                                </span>
                                            </div>
                                            <span className="fw-bold fs-5 search-price">
                                                {` ${(product.price - (product.price * product.discount_percentage / 100)).toFixed(2)}€`}
                                            </span>
                                        </>
                                    ) : (
                                        <p className="fw-bold search-price">{`${product.price}€`}</p>
                                    )}
                                </div>
                                <div className="add-cart me-5 align-self-center">
                                    <button onClick={() => addToCart(product)} className="search-button">
                                        Aggiungi al carrello
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            )}
        </div>
    );
}
