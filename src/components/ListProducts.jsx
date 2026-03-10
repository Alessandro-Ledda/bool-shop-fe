// import card del singolo prodotto
import ProductCard from "./ProductCard";



import { useApi } from "../contexts/ApiProvider";

function ListProducts() {

    const { products } = useApi();


    // funzione per renderizzare i prodotti
    function renderProducts() {
        return products.map(product => {
            return (
                <div className="wrap" key={product.id}>
                    <ProductCard productProp={product} />
                </div>
            )
        })
    }

    if (!products.length) return <div>Nessun prodotto</div>;

    return (
        <>
            <h2>Product List</h2>

            <div className="container">
                {renderProducts()}
            </div>
        </>
    )

}

export default ListProducts