import axios from "axios";
import { useState, useEffect } from "react";
import { useApi } from "../contexts/ApiProvider";
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

        filteredProducts.map(product => (
            <div key={product.id} >
                <div id="card-product">
                    <div className="page-container">

                    </div>
                    <div className="card w-50">
                        <img className="img-detail" src={product.image_url} alt={product.name} />
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p>DESCRIZIONE: {product.details}</p>

                    </div>
                </div>
            </div>
        ))

    )
}