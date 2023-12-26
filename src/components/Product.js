import React, { useContext } from 'react'
// import link route for linking another file
import { Link } from 'react-router-dom'
// import { BsPlus} from "react-icons/bs";
// import { FcViewDetails, FcPlus } from "react-icons/fc";
import { CgDetailsMore } from 'react-icons/cg'
import { AiOutlinePlusCircle } from 'react-icons/ai'

// import add to cart component for fetching data from here.
import { CartContext } from '../contexts/CartContext'

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  // console.log(product)

  // fetching some data from product
  const { id, image, category, title, price, rating } = product
  return (
    <div>
      <div className='mt-9 border border-[#e4e4e4] h-[300px mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full my-9 flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img
              className='max-h-[160px] group-hover:scale-110 transition-all duration-300 ease-out'
              src={image}
              alt=''
            />
          </div>
        </div>
        {/* button */}
        <div
          className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center
         justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 '
        >
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center'>
              <AiOutlinePlusCircle className='p-1 text-3xl rounded-xl hover:bg-blue-600 hover:text-white shadow-lg shadow-gray-300 hover:scale-110 transition-all duration-300 ease-out' />
            </div>
          </button>

          <Link to={`/product/${id}`}>
            <CgDetailsMore className='text-sm w-9 h-9 p-2 rounded-2xl bg-white flex justify-center items-center text-primary shadow-lg shadow-gray-800 hover:bg-blue-400 hover:text-white hover:scale-110 transition-all duration-300 ease-out ' />
          </Link>
        </div>
      </div>
      {/* category and title */}
      <div className=' relative'>
        <span className=' absolute -top-[15rem] mx-7 text-sm capitalize group-hover:opacity-100 transition-all duration-300 bg-gray-500 p-2 rounded-lg text-black'>
          {category}
        </span>
        <Link to={`/product/${id}`}>
          <h2 className='font-bold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold justify-between p-2 flex '>
          <span className='bg-blue-400 rounded-lg  border p-2'>
          Price : $ {price}
          </span>
         
          <span className='text-yellow-400 inline-block border p-2'> Review : {rating.rate}</span>
        </div>
      </div>
    </div>
  )
}

export default Product
