import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/navlogo.svg";
import Search from "../../assets/images/search.svg";
import User from "../../assets/images/user.svg";
import Cart from "../../assets/images/cart.svg";
import { useCart } from "../pages/cart/CartContext";

const Nav = () => {
  const { cartItemCount } = useCart();

  return (
    <div className="w-[90%] flex items-center justify-center h-[108px] border-b-2 border-[none] border-solid mx-auto my-0 ">
      <div className="w-[95%] flex items-center justify-between h-[30px]">
        <ul className="flex items-center justify-between w-[19%] h-[100%]">
          <li>
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </li>
        </ul>
        <ul className="w-[47%] h-[100%] flex items-center justify-between ">
          <li className="text-[rgba(13,38,18,1)] text-base font-medium leading-[19.36px] text-left font-family Inter">
            <Link to="/">Products</Link>
          </li>
          <li className="text-[rgba(13,38,18,1)] text-base font-medium leading-[19.36px] text-left font-family Inter">
            Categories
          </li>
          <li className="text-[rgba(13,38,18,1)] text-base font-medium leading-[19.36px] text-left font-family Inter">
            Sales
          </li>
          <li className="text-[rgba(13,38,18,1)] text-base font-medium leading-[19.36px] text-left font-family Inter">
            Help
          </li>
          <li className="text-[rgba(13,38,18,1)] text-base font-medium leading-[19.36px] text-left font-family Inter">
            About
          </li>
        </ul>
        <ul className="w-[10%] h-[100%] flex items-center justify-between relative">
          <li>
            <img className="w-[18px] h-[18px]" src={Search} alt="search" />
          </li>
          <li>
            <img className="w-[18px] h-[18px]" src={User} alt="user" />
          </li>
          <li className="relative">
            <Link to="/cart">
              <img
                className="w-[18px] h-[18px] cursor-pointer"
                src={Cart}
                alt="cart"
              />
              {cartItemCount > 0 && (
                <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
