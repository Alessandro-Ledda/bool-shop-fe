// creiamo var per leggere e scrivere il carrello
const CART_KEY = "cart";
// creiamo var per leggere e scrivere la wishlist
const WISHLIST_KEY = "wishlist"

// cart
// lettura carrello
export const getCartFromStorage = () => {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
};

// scrittura carrello
export const saveCartToStorage = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// wishlist
// lettura wishlist
export const getWishlistFromStorage = () => {
    const wishlist = localStorage.getItem(WISHLIST_KEY);
    return wishlist ? JSON.parse(wishlist) : [];
};

// srcittura wishlist
export const saveWishlistToStorage = (wishlist) => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}