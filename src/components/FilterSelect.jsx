import axios from "axios";
import { useState, useEffect } from "react";

const endpoint = import.meta.env.VITE_APP_URL;


export default function FilterSelect({ search, onFilterChange }) {

    const [order, setOrder] = useState("");


    function lessPrice() {
        axios.get(`${endpoint}api/products?order=less_price&searched=${search}`)
            .then(res => {
                onFilterChange(res.data)
                setOrder("less_price")
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
                setOrder("more_price")

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
                setOrder("latest_arrivals")
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
                setOrder("first_arrivals")
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
                setOrder("name")
            })
            .catch(err => {
                console.log(err);
            })
            .finally()
    }

    function discountProducts() {
        if (search === "") {
            axios.get(`${endpoint}api/products?discount=true&order=${order}`)
                .then(res => {
                    onFilterChange(res.data)
                    console.log(order)
                    console.log(search)
                })
                .catch(err => {
                    console.log(err);
                })
                .finally()
        }
        else {
            axios.get(`${endpoint}api/products?discount=true&order=${order}&searched=${search}`)
                .then(res => {
                    onFilterChange(res.data)
                    console.log(order)
                    console.log(search)
                })
                .catch(err => {
                    console.log(err);
                })
                .finally()
        }
    }

    return (
        <div className="filter-container">
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
            </div >
            <div className="filter-button">
                <button onClick={discountProducts}>
                    filtra per scontati
                </button>
            </div>
        </div>
    )
}