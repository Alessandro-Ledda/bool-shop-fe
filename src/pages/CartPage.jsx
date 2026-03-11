import { useCart } from "../contexts/CartContext";
import ProductCardCart from "../components/ProductCardCart";

function CartPage() {
    const { cart, removeFromCart } = useCart();

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div>
            <h1 className="title">Carrello</h1>

            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Quantità: {item.quantity}</p>
                    <p>Prezzo: {item.price}€</p>

                    <button onClick={() => removeFromCart(item.id)}>
                        Rimuovi
                    </button>
                </div>
            ))}

            <h2>Totale: {total}€</h2>
        </div>
    );
}

export default CartPage;