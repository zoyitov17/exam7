import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/pages/products/Products";
import Product from "./components/pages/product/Product";
import Cart from "./components/pages/cart/Cart";
import TopNav from "./components/nav/TopNav";
import Nav from "./components/nav/Nav";
import { CartProvider } from "./components/pages/cart/CartContext";
import Footer from './components/footer/Footer'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="max-w-[1320px] mx-auto my-0">
          <TopNav />
          <Nav />
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
