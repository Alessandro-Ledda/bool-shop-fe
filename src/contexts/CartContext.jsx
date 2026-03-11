// permette di usar il carrello in qualsiasi componente
import { createContext, useContext, useState, useEffect } from "react";
import { getCartFromStorage, saveCartToStorage } from "../utils/cartStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getCartFromStorage());
    }, []);

    useEffect(() => {
        saveCartToStorage(cart);
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const exist = prevCart.find((item) => item.id === product.id);

            if (exist) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);