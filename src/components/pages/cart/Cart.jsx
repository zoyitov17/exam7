import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, calculateTotal } =
    useCart();

  const handleQuantityChange = (id, delta) => {
    updateQuantity(id, delta);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-[rgba(11,164,45,1)] text-[18px] font-medium text-center mt-[100px]">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="w-[90%] h-auto mx-auto  my-8 p-4">
      <a
        href="/"
        className="text-[rgba(13,38,18,1)] text-base font-semibold leading-[22.5px] mb-10 inline-block"
      >
        Back to Shopping
      </a>
      <h1 className="text-2xl font-bold mb-4">SHOPPING CART</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full mt-[20px] md:w-2/3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 mr-4"
              >
                ×
              </button>
              <img
                src={item.image_url}
                alt={item.name}
                className="w-24 h-24 object-cover mr-4"
              />
              <div className="flex flex-col flex-grow">
                <span className="font-bold">{item.name}</span>
                <span>{item.description}</span>
                <span className="text-gray-500">{item.color}</span>
                <span className="text-green-500">In stock</span>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="p-2 rounded-[50%] h-[33px] w-[33px] flex items-center justify-center border"
                >
                  −
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="p-2 rounded-[50%] h-[33px] w-[33px] flex items-center justify-center border"
                >
                  +
                </button>
              </div>
              <span className="font-bold ml-4">
                ${(item.price)}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/3 md:pl-4">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-[6px]">CART TOTALS</h2>
            <div className="pt-[30px] border-[rgba(13,38,18,1)] border-t-2 border-dashed flex items-center justify-between mb-5">
              <span>Shipping (3-5 Business Days)</span>
              <span className="text-[rgba(25,13,38,1)] ml-[50px] text-lg font-medium">
                Free
              </span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[15px]">
                TAX (estimated for the United States (US))
              </span>
              <span className="text-[rgba(25,13,38,1)] ml-4 text-lg font-medium">
                $0
              </span>
            </div>
            <div className="flex justify-between mb-6">
              <span>Subtotal</span>
              <span className="text-[rgba(25,13,38,1)] mb-[10px] ml-3 text-lg font-medium">
                ${calculateTotal()}
              </span>
            </div>
            <div className="pt-[40px] border-t-2 border-dashed border-[rgba(13,38,18,1)] mb-10 flex justify-between font-bold">
              <span>Total</span>
              <span>${calculateTotal()}</span>
            </div>
            <button className="w-full bg-[rgba(11,164,45,1)] mt-4 mb-[36] text-[rgba(255,255,255,1)] text-sm font-medium leading-[18px] text-center py-2 rounded-md">
              PROCEED TO CHECKOUT
            </button>
            <a
              href="/"
              className="text-[rgba(13,38,18,1)] text-base font-semibold leading-[22.5px] pt-[30px] block text-center mt-4"
            >
              Back to Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
