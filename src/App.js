import React from 'react'
// import router from router dom@6
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import home file from pages it's a main page
import Home from './pages/Home'
// import product details page where it store all details or product
import ProductDetails from './pages/ProductsDetails'
// import sidebar component its store add to cart page where we can see all items which is add by the user
import Sidebar from './components/sidebar/Sidebar'
// this is header page where some values are available
import Header from './components/shared/Header/Header'

import Footer from './components/shared/Footer/Footer'
// import { Cotegory } from './components/cotegory/Cotegory';
import { Checkout } from './components/checkout/Checkout'


const App = () => {
  // const [items, setItem]=useState(ProductContext)
  // const menuItems =[...new Set(ProductContext.map((val)=>val.category))]
  return (
    <div className='overflow-hidden'>
      <Router>
        {/* header page router */}
        <Header />
        {/* all file route */}
        <Routes>
          <Route path='/' element={<Home  />}></Route>
          <Route path='/product/:id' element={<ProductDetails />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
    
        </Routes>
        {/* sidebar */}
        <Sidebar />
        <Footer />
      </Router>
    </div>
  )
}

export default App
