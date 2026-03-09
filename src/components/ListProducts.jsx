// import axios per chiamata al db
import axios from "axios";
// import state e effect
import { useState, useEffect } from "react";
// import card del singolo prodotto
import ProductCard from "./ProductCard";
// salviamo in una costante l'endpoint
const endpoint = import.meta.env.VITE_APP_URL;

import { useApi } from "../contexts/ApiProvider";

function ListProducts() {

    const { products } = useApi();


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

    if (!products.length) return <div>Nessun prodotto</div>;

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