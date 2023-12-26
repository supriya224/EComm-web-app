import React, { useContext } from "react";
// import use params from router
import { useParams } from "react-router-dom";
// import cartcontext its holds functionality of cart
import { CartContext } from "../contexts/CartContext";
// import productcontext its holds functionality of cart
import { ProductContext } from "../contexts/ProductContext";
import { FaStar } from "react-icons/fa6";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  // product data
  const { products } = useContext(ProductContext);
  // add to cart data
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  // loading page
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading..
      </section>
    );
  }

  const { title, price, description, image,rating } = product;
  console.log(product);

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
            {/* image */}
            <img className="max-w-[100px] lg:max-w-sm" src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left px-32">
            {/* title */}
            <h2 className="text-[26px] font-medium mb-2 max-w-[450] mx-auto">
              {title}
            </h2>
            {/* price */}
            <div className="text-xl text-red-500 font-medium mb-6">
              ${price}
            </div>
           
            {/* description */}
            <p className="mb-6">{description}</p>
            {/* addto cart component */}
            <button
              className="bg-blue-600 rounded-lg hover:scale-110 transition-all duration-300 ease-out py-4 px-8 text-white"
              onClick={() => addToCart(product, product.id)}
            >
              Add to cart
            </button>
            <div className=" mt-5 text-xl flex text-blue-900 font-bold mb-6 border border-black p-2 w-[16rem] ">
              Customer review<span className="text-yellow-300 text-3xl pl-5 flex">{rating.rate}<FaStar /></span> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
