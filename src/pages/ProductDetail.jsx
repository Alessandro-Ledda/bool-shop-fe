import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
//importo componente di ref per dettaglio
import CardDetail from "../components/CardDetail";
//salvo endpoint in var
const endpoint = import.meta.env.VITE_APP_URL;

//set funzione per il dettaglio
export default function ProductDetail() {

    //recupero id di ref attraverso params
    const { slug } = useParams();

    //setto var di stato per gestione prodotto
    const [product, setProduct] = useState({});

    //setto funzione per gestione chiamata alla show del db
    function fetchProduct() {
        //chiamata
        axios.get(`${endpoint}api/products/${slug}`)
            .then(res => { setProduct(res.data); })
            .catch(err => {
                console.log(err);
            })
            .finally()
    }

    //richiamo effect per il controllo su effetti collaterali
    useEffect(fetchProduct, [slug]);

    return (
        <CardDetail product={product} />
    )

}
