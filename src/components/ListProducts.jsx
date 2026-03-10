// import card del singolo prodotto
import ProductCard from "./ProductCard";
import { useApi } from "../contexts/ApiProvider";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function ListProducts() {
  const { products } = useApi();

  // funzione per renderizzare i prodotti come slide
  function renderProducts() {
    return products.map((product) => (
      <SwiperSlide key={product.id}>
        <ProductCard productProp={product} />
      </SwiperSlide>
    ));
  }

  if (!products.length) return <div>Nessun prodotto</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-5">Product List</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={4} // quante card si vedono contemporaneamente
        breakpoints={{
          320: { slidesPerView: 1 }, // mobile
          768: { slidesPerView: 2 }, // tablet
          1024: { slidesPerView: 4 }, // desktop
        }}
      >
        {renderProducts()}
      </Swiper>
    </div>
  );
}

export default ListProducts;
