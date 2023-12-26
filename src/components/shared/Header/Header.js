// import useContext, useEffect, and useState for managed the state and show some sideEffect
import React, { useContext, useEffect, useState } from 'react'
// import sideabarcontext for fetching some data using props
import { SidebarContext } from '../../../contexts/SidebarContext'
// import cartcontext for fetching some data using props
import { CartContext } from '../../../contexts/CartContext'
// import link for linking another file
import { Link } from 'react-router-dom'
// react-icons
import { BsBag } from 'react-icons/bs'

const Header = () => {
  // useState
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)
  // useEffect
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <header
      className={`${
        isActive ? 'bg-white shadow-lg shadow-blue-900 ' : 'bg-white'
      } py-2 px-20 fixed w-full z-10 transition-all border `}
    >
      <div className='container gap-5 flex items-center justify-between h-full md:justify-between'>
        <div className='w-[80vw] gap-12 justify-between text-blue-900'>
          {/* listing */}
          {/* <a href='https://quickbillsolutions.com/' className='flex items-center'> */}
            <img
              src='https://www.quickbillsolutions.com/assets/images/logo-1.png'
              className='h-9 mr-3'
              alt='FlowBite Logo'
            />
          
          <Link className=' md:text-lg hover:font-bold hover:text-blue-900 ' to={'/'}>
            Home{' '}
          </Link>
          {/* <Link
            to={'/login'}
            className='md:text-sm border-x hover:font-bold hover:text-blue-900  pl-2  '
          >
            Login{' '}
          </Link>
          <Link
            className=' md:text-sm sm:text-sm hover:font-bold hover:text-blue-900 pl-2  '
            to={'/register'}
          >
            Register{' '}
          </Link> */}
        </div>
        {/* cart icon */}
        <div onClick={() => setIsOpen(!isOpen)} className=' cursor-pointer flex relative'>
          <BsBag className='text-2xl hover:font-bold hover:text-blue-900' />
          <div
            className='bg-red-400 absolute -right-2 -bottom-2 text-[12px] 
      w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
