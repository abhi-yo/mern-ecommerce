import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = (productId: string) => {
    // Add your logic to add the product to the cart
    console.log(`Product ${productId} added to the cart`);
  };

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
          productId="adsasas"
          name="Macbook"
          price={4545}
          stock={435}
          handler={() => addToCartHandler("adsasas")}
          photo="https://m.media-amazon.com/images/I/71TPda7cwUL._SX522_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
