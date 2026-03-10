// import card del singolo prodotto
import ProductCard from "./ProductCard";



import { useApi } from "../contexts/ApiProvider";

function ListProducts() {

    const { products } = useApi();


    // funzione per renderizzare i prodotti
    function renderProducts() {
        return (
            <div className="container list-card">
                {products.map(product => (
                    <div className="wrap" key={product.id}>
                        <ProductCard productProp={product} />
                    </div>
                ))}
            </div>
        );
    }

    if (!products.length) return <div>Nessun prodotto</div>;

    return (
        <>
            <h2 className="subtitle">Product List</h2>

            <div className="container">
                {renderProducts()}
            </div>
        </>
    )

}

export default ListProducts