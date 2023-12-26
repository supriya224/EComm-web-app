import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import product provider page it store functionality of product
import ProductProvider from "./contexts/ProductContext";
// import sidebar provider is store add to cart but how it will show is there
import SidebarProvider from "./contexts/SidebarContext";
// import cart provider it store all functionality of more than function
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // sidebar provider
  <SidebarProvider>
    {/* cartprovider */}
    <CartProvider>
      {/* product provider */}
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);


