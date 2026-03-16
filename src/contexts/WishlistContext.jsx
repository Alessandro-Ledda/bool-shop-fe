import { Children, createContext, useContext, useEffect, useState } from "react";
import { getWishlistFromStorage, saveWishlistToStorage } from "../utils/cartStorage";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storeWishlist = getWishlistFromStorage();
        setWishlist(storeWishlist);
    }, []);

    // add to wishlist
    const addToWishlist = (productId) => {
        if (wishlist.includes(productId)) return;

        const update = [...wishlist, productId];
        setWishlist(update);
        saveWishlistToStorage(update);
    }

    // remove from wishlist
    const removeFromWishlist = (productId) => {
        const update = wishlist.filter(id => id !== productId);
        setWishlist(update);
        saveWishlistToStorage(update);
    };

    // toggle per rimuovere se c'e' e aggiungere se manca
    const toggleWishlist = (productId) => {
        if (wishlist.includes(productId)) {
            removeFromWishlist(productId);
        } else {
            addToWishlist(productId);
        }
    };

    // fun da implementare ai prodotti 
    const isInWishlist = (productId) => {
        return wishlist.includes(productId);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist,
                toggleWishlist,
                isInWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    );

};

export const useWishlist = () => useContext(WishlistContext);


