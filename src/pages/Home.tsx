import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { Skeleton } from "../components/loader";
import ProductCard from "../components/product-card";
// import { useLatestProductsQuery } from "../redux/api/productAPI";
// import { addToCart } from "../redux/reducer/cartReducer";
import { CartItem } from "../types/types";

const Home = () => {
  // const { data, isLoading, isError } = useLatestProductsQuery("");

  // const dispatch = useDispatch();

  const addToCartHandler = (cartItem: CartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    // dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };

  // if (isError) toast.error("Cannot Fetch the Products");

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
      
            <ProductCard
              key="jdks"
              productId="knsd"
              name="Braclete"
              price={12300}
              stock={3}
              handler={addToCartHandler}
              photo="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2b4ddb5a/images/hi-res/51G4B1BHLAA00_1.jpg?sw=640&sh=640"
            />
      </main>
    </div>
  );
};

export default Home;
