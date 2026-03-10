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

  // funzione per renderizzare i prodotti con discount come slide
  function renderDiscountProducts() {
    return products
      .filter((product) => product.discount_percentage !== null)
      .map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard productProp={product} />
        </SwiperSlide>
      ));
  }

  // funzione per renderizzare i prodotti ultimi arrivi
  function renderLatestArrivals() {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1); // data di un mese fa

    const latest = products
      .filter((product) => {
        // controlla che created_at esista e sia nell'ultimo mese
        return (
          product.created_date && new Date(product.created_date) >= oneMonthAgo
        );
      })
      .map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard productProp={product} />
        </SwiperSlide>
      ));

    return latest;
  }

  if (!products.length) return <div>Nessun prodotto</div>;

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-5">Discount products</h2>

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
          {renderDiscountProducts()}
        </Swiper>
      </div>

      <div className="container mt-5">
        <h2 className="mb-5">Latest arrivals</h2>

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
          {renderLatestArrivals()}
        </Swiper>
      </div>
    </>
  );
}

export default ListProducts;
