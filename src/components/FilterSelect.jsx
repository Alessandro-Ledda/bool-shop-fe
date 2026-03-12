import axios from "axios";
import { useState, useEffect, use } from "react";

const endpoint = import.meta.env.VITE_APP_URL;


export default function FilterSelect({ search, onFilterChange }) {

    const [lessPriced, setLessPriced] = useState([]);
    const [morePriced, setMorePriced] = useState([]);
    const [latestArrived, setLatestArrived] = useState([]);
    const [firstArrived, setFirstArrived] = useState([]);
    const [nameOrdered, setNameOrdered] = useState([]);

    function lessPrice() {
        axios.get(`${endpoint}api/products?order=less_price&searched=${search}`)
            .then(res => {
                onFilterChange(res.data)
            })
            .catch(err => {
                console.log(err);
            })
            .finally()
    }


    function morePrice() {
        axios.get(`${endpoint}api/products?order=more_price&searched=${search}`)
            .then(res => {
                onFilterChange(res.data)
            })
            .catch(err => {
                console.log(err);
            })
            .finally()
    }


    function latestArrivals() {
        axios.get(`${endpoint}api/products?order=latest_arrivals&searched=${search}`)
            .then(res => {
                onFilterChange(res.data)
            })
            .catch(err => {
                console.log(err);
            })
            .finally()
    }


    function firstArrivals() {
        axios.get(`${endpoint}api/products?order=first_arrivals&searched=${search}`)
            .then(res => {
                onFilterChange(res.data)
            })
            .catch(err => {
                console.log(err);
            })
            .finally()
    }


    function nameOrder() {
        axios.get(`${endpoint}api/products?order=name&searched=${search}`)
            .then(res => {
                onFilterChange(res.data)
            })
            .catch(err => {
                console.log(err);
            })
            .finally()
    }

    return (
        <div className="my-select">
            <select onChange={(e) => {
                if (e.target.value === "less_price") lessPrice();
                if (e.target.value === "more_price") morePrice();
                if (e.target.value === "latest_arrivals") latestArrivals();
                if (e.target.value === "first_arrivals") firstArrivals();
                if (e.target.value === "name") nameOrder();
            }}>
                <option value="">Filtra per...</option>
                <option value="less_price">Meno costoso</option>
                <option value="more_price">Più costoso</option>
                <option value="latest_arrivals">Ultimi arrivi</option>
                <option value="first_arrivals">Primi arrivi</option>
                <option value="name">Per nome</option>
            </select>
        </div>
    )
}