import { useCart } from "../contexts/CartContext";
import { useApi } from "../contexts/ApiProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function CartPage() {
    const { cart, removeFromCart } = useCart();
    const { products } = useApi();

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div>
            <h1 className="title">Riepilogo Carrello</h1>

            {cart.length === 0 && <p>Il carrello è vuoto</p>}

            {cart.map((item) => {
                // trova il prodotto completo dal backend
                const product = products.find((p) => p.id === item.id);

                return (
                    <ul key={item.id} className="cart-item">
                        {product && product.image && (
                            <li>
                                <img
                                    src={product.image_url}
                                    alt={item.name}
                                    width="80"
                                />
                            </li>
                        )}
                        <li>{item.name}</li>
                        <li>Quantità: {item.quantity}</li>
                        <li>Prezzo: {item.price}€</li>



                        <li>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="btn-font-aw"
                            >
                                <FontAwesomeIcon icon={faTrash} color="red" />
                            </button>
                        </li>
                    </ul>
                );
            })}

            <h2>Totale: {total}€</h2>
        </div>
    );
}

export default CartPage;