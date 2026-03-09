// import axios per chiamata al db
import { axios } from "axios";
// import state e effect
import { useState, useEffect } from "react";
// import card del singolo prodotto
import ProductCard from "./ProductCard";
// salviamo in una costante l'endpoint
const endpoint = "http://localhost:3000/api/products"


function ListProducts() {

    // settagio var di stato per gestione prodotti
    const [products, setProducts] = useState([]);

    // creazione funzione per rachiudere chiamata
    function fetchProduct() {

        axios.get(endpoint)
            .then(res => { setProducts(res.data); })
            .catch(err => {
                console.log(err);
            })
            .finally()
    }

    // funzione per renderizzare i prodotti
    function renderProducts() {
        return products.map(product => {
            return (
                <div className="wrap" key={product.id}>
                    <ProductCard productProp={product} />
                </div>
            )
        })
    }
    // richiamo effect per eventuali effetti collaterali
    useEffect(fetchProduct, [])

    return (
        <>
            <h2>Product List</h2>

            <div className="container">
                <div className="content">
                    {renderProducts()}
                </div>
            </div>
        </>
    )

}

export default ListProducts