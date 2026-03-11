// mostra un prodotto e permette di aggiungere al carrello
import { useCart } from "../contexts/CartContext";

function ProductCardCart({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price} €</p>

            <button onClick={() => addToCart(product)}>
                Aggiungi al carrello
            </button>
        </div>
    );
}

export default ProductCardCart;