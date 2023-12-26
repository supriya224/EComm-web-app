import React, { useContext } from "react";
// import productContext page
import { ProductContext } from "../contexts/ProductContext";
// import product component and fetch some details
import Product from "../components/Product";
// import { Category } from "../components/cotegory/Category";



const Home = () => {
  const { products } = useContext(ProductContext);
  // console.log(products);

  // filterd products
  const filterdProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "women's clothing" ||
      item.category === "jewelery" ||
      item.category === "electronics"
    );
  });
  console.log(filterdProducts);

  return (
    <div>
      {/* <Category/> */}
      <section className="py-4 px-9 my-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mx-w-sm mx-auto md:max-w-none md:mx-0">
            {filterdProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
