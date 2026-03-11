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

        <div id="search-card-list" className="row">
            {filteredProducts.map(product => (
                <div key={product.id} className="card col-4" >


                    <img className="img-detail w-100" src={product.image_url} alt={product.name} />
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>

                </div>

            ))}
        </div>
    )
}