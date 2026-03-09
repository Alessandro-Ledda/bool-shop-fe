import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const endpoint = import.meta.env.VITE_APP_URL;
const ApiContext = createContext();

export function ApiProvider({ children }) {

    const [products, setProducts] = useState([]);

    function fetchProduct() {

        axios.get(`${endpoint}api/products`)
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err);
            })
            .finally()
    }


    useEffect(fetchProduct, [])


    return (
        <ApiContext.Provider value={{ products, setProducts }}>
            {children}
        </ApiContext.Provider>
    )
}

export function useApi() {
    const context = useContext(ApiContext);
    return context;
}