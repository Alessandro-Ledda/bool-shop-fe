import axios from "axios";
import { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import { useApi } from "../contexts/ApiProvider";

const endpoint = import.meta.env.VITE_APP_URL;


export default function FilterSelect({ order, setOrder }) {





    // 



    return (
        <div className="filter-container">
            <div className="my-select">
                <select value={order} onChange={(e) => {
                    if (e.target.value === "less_price") setOrder("less_price");
                    if (e.target.value === "more_price") setOrder("more_price");
                    if (e.target.value === "latest_arrivals") setOrder("latest_arrivals");
                    if (e.target.value === "first_arrivals") setOrder("first_arrivals");
                    if (e.target.value === "name") setOrder("name");
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
                <button >
                    filtra per scontati
                </button>
            </div>
        </div>
    )
}