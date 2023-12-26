import React, { useContext } from "react";
// // import link for linking another file
import { Link} from "react-router-dom";
// react-icons
import { IoIosAdd, IoMdClose, IoMdRemove } from "react-icons/io";
// // import cartcontext for fetching some data using props
import { CartContext } from "../contexts/CartContext";
// unstable_HistoryRouter

const CartItem = ({ item }) => {
  // desturcture of all item in to cart items
  const { id, title, price, image, amount } = item;
  // cart context data fetching
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div className="flex gap-x-4 py-1 lg:px-6 border-b border-gray-500 w-full font-light text-gray-600">
      <div className="w-full min-h-[150px] flex items-center gap-x-6 ">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[50px]" src={image} alt="" />
        </Link>
        {/* remove and title item */}

        <div className=" w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div className="text-2xl cursor-pointer">
              <IoMdClose
                className="text-gray-500 hover:text-red-500 thover:scale-110 transition-all duration-300 ease-out"
                onClick={() => removeFromCart(id)}
              />
            </div>
          </div>

          <div className=" flex gap-x-1 h-[36px] text-sm">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px] items-center  h-full border cursor-pointer text-primary font-medium ">
              {/* decrease datat */}
              <div
                className="flex p-1 flex-1 justify-center items-center hover:rounded-2xl font-medium text-white bg-blue-400 h-full hover:scale-110 transition-all duration-300 ease-out"
                onClick={() => decreaseAmount(id)}
              >
                <IoMdRemove className=" items-center hover:scale-110 transition-all duration-300 ease-out" />
              </div>
              {/* amount */}
              <div className="h-full justify-center items-center flex px-2  ">
                {amount}
              </div>
              {/* increase datat */}
              <div
                className="flex flex-1 p-1 justify-center hover:rounded-2xl items-center cursor-pointer text-white bg-blue-900 h-full hover:scale-110 transition-all duration-300 ease-out"
                onClick={() => increaseAmount(id)}
              >
                <IoIosAdd />
              </div>
            </div>

            <div className="flex-1 flex justify-around items-center text-primary font-medium">
              ${price}
            </div>

            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              ${`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
