// import card del singolo prodotto
import ProductCard from "./ProductCard";

import { useApi } from "../contexts/ApiProvider";

function ListProducts() {
  const { products } = useApi();

  // funzione per renderizzare i prodotti
  function renderProducts() {
    return products.map((product) => {
      return (
        <div className="wrap" key={product.id}>
          <ProductCard productProp={product} />
        </div>
      );
    });
  }

  if (!products.length) return <div>Nessun prodotto</div>;

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-5">Product List</h2>
        {renderProducts()}
      </div>
    </>
  );
}

export default ListProducts;
