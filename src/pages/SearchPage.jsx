import axios from "axios";
import { useState, useEffect } from "react";
import { useApi } from "../contexts/ApiProvider";
import { Link } from "react-router-dom";
const endpoint = import.meta.env.VITE_APP_URL;


export default function SearchPage() {

    const { search } = useApi();

    const [filteredProducts, setFilteredProducts] = useState([]);

    function fetchProduct() {

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
            {filteredProducts.map(product => (
                <div key={product.id} className="search-card col-3 me-2 " >

                    <Link to={`/products/${product.slug}`}>
                        <img className="img-detail w-100" src={product.image_url} alt={product.name} />
                        <h1 className="text-dark">{product.name}</h1>
                    </Link>
                    <p>{product.description}</p>
                    <p className="fw-bold search-price">{`${product.price} €`}</p>

                </div>

            ))}
        </div>
    )
}