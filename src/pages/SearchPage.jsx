import axios from "axios";
import { useState, useEffect } from "react";
import { useApi } from "../contexts/ApiProvider";
import { Link } from "react-router-dom";
const endpoint = import.meta.env.VITE_APP_URL;
// import location
import { useLocation } from "react-router-dom";
// import context carrello
import { useCart } from "../contexts/CartContext"
import FilterSelect from "../components/FilterSelect";
//import FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical, faList } from '@fortawesome/free-solid-svg-icons'


export default function SearchPage() {

    const { search } = useApi();
    const { addToCart } = useCart();

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [layout, setLayout] = useState("grid");
    const location = useLocation();
    const onSearchPage = location.pathname === "/search"

    function fetchProduct() {

        if (search.length < 2 && !onSearchPage) {
            setFilteredProducts([]);
            return;
        }

        axios.get(`${endpoint}api/products?searched=${search}`)
            .then(res => {
                setFilteredProducts(res.data)

            })
            .catch(err => {
                console.log(err);
            })
            .finally()
    }


    useEffect(fetchProduct, [search])

    return (

        <div id="search-card-list" className="row container justify-content-center m-auto gy-5 pb-5">
            <div className="layout-buttons">
                <button onClick={() => setLayout("grid")} className={layout === "grid" ? "btn-active me-3" : "btn-not-active me-3"}><FontAwesomeIcon icon={faGripVertical} /></button>
                <button onClick={() => setLayout("list")} className={layout === "list" ? "btn-active" : "btn-not-active"}><FontAwesomeIcon icon={faList} /></button>
            </div>
            <div>
                <FilterSelect search={search} onFilterChange={setFilteredProducts} />
            </div>
            {layout === "grid" ? (
                filteredProducts.map(product => (
                    <div key={product.id} className="search-grid-card col-3 me-2 " >

                        <Link to={`/products/${product.slug}`}>
                            <div className="d-flex">
                                <div className="sale-badge">SALE</div>
                            </div>
                            <img className="img-detail w-100" src={product.image_url} alt={product.name} />
                            <h1 className="text-dark">{product.name}</h1>
                        </Link>
                        <p>{product.description}</p>
                        {product.discount_percentage ?
                            (
                                <>
                                    <div className="d-flex justify-content-between">
                                        <p className="fw-bold d-inline search-price text-decoration-line-through">{product.price}</p>
                                        <span className="discounted-badge">{`${product.discount_percentage} %`}</span>
                                    </div>
                                    <span className="fw-bold fs-5 search-price">{` ${(product.price - (product.price * product.discount_percentage / 100)).toFixed(2)}€`}</span>

                                </>
                            ) :
                            (
                                <p className="fw-bold search-price">{`${product.price}€`}</p>
                            )
                        }

                        <div className="add-cart">
                            <button onClick={() => addToCart(product)} className="search-button mb-3">Aggiungi al carrello</button>
                        </div>
                    </div>

                ))
            ) : (filteredProducts.map(product => (
                <div key={product.id}>
                    <Link to={`/products/${product.slug}`}>
                        <div className="card search-list-card col-12 w-100 d-flex flex-row justify-content-between">

                            <img src={product.image_url} alt={product.name} className="w-25" />

                            <div className="search-list-description ms-3 mt-5">

                                <h3 className="search-list-title fw-bold w-100">{product.name}</h3>

                                <p className="fs-5">{product.description}</p>
                                <p className="fw-bold fs-4 search-price">{`${product.price} €`}</p>
                            </div>

                            <div className="add-cart me-5  align-self-center">
                                <button onClick={() => addToCart(product)} className="search-button">Aggiungi al carrello</button>
                            </div>

                        </div>
                    </Link>
                </div>
            )))


            }
        </div>
    )
}