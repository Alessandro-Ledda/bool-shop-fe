import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
//importo componente di ref per dettaglio
import CardDetail from "../components/CardDetail";
//salvo endpoint in var
const endPoint = "http://localhost:3000/api/products"

//set funzione per il dettaglio
export default function ProductDetail() {

    //recupero id di ref attraverso params
    const { slug } = useParams();

    //setto var di stato per gestione prodotto
    const [product, setProduct] = useState({});

    //setto funzione per gestione chiamata alla show del db
    function fetchProduct() {
        //chiamata
        axios.get(`${endPoint}/${slug}`)
            .then(res => { setProduct(res.data); })
            .catch(err => {
                console.log(err);
            })
            .finally()
    }

    //richiamo effect per il controllo su effetti collaterali
    useEffect(fetchProduct, []);

    return (
        <header id="card-product">
            <div className="page-container">
                <img src={product.image} alt={product.name} />
            </div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <Link className="btn" to="/">Ritorna alla Home</Link>
        </header>
    )

}
