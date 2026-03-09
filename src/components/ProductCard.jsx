
export default function ProductCard({ productProp }) {
    <div className="card border border-3 col-4 border-primary-subtle bg-secondary-subtle">
        <figure className="my-figure">
            <img src={productProp.image} alt={productProp.name} />
        </figure>
        <figcaption>
            <div>{productProp.price}</div>
            <button className="btn">Aggiungi al carrello</button>
        </figcaption>
    </div>
}