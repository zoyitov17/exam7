import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Star from "../../../assets/images/emty-star.svg";
import cartIcon from "../../../assets/images/button-cart.svg";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://headphones-server.onrender.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="w-[90%] mx-auto my-0 mt-[50px] h-auto flex items-center mb-[15px] justify-between">
      <div className="w-[55%] shadow-[7px_7px_5px_5px_rgba(244,244,244,1)]  h-[555px] border border-solid border-[rgba(244,244,244,1)] flex items-center justify-center">
        <img
          src={product.image_url}
          alt={product.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="w-[40%] max-w-2xl p-4">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center mb-2">
          {Array.from({ length: product.ratings_stars }, (_, i) => (
            <img key={i} src={Star} alt="Star" className="w-4 h-4 mr-1" />
          ))}
          {Array.from({ length: 5 - product.ratings_stars }, (_, i) => (
            <img key={i} src={Star} alt="Empty Star" className="w-4 h-4 mr-1" />
          ))}
          <span className="text-gray-600 ml-2">({product.rating_counts})</span>
        </div>
        <hr className="my-4 border-1 border-dashed border-[rgba(106,105,105,1)]" />
        <div className="text-3xl font-bold mb-1">
          ${product.price ? product.price.toFixed(2) : "0.00"} or $
          {product.monthlyPrice ? product.monthlyPrice.toFixed(2) : "0.00"}
          /month
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Suggested payments with 6 month special financing
        </p>
        <hr className="my-4 border-1 border-dashed border-[rgba(106,105,105,1)]" />
        <div className="mb-4">
          <p className="text-lg font-bold mb-2">Choose a color</p>
          <div className="flex space-x-4">
            {product.color_options.map((color, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
        <hr className="my-4 border-1 border-dashed border-[rgba(106,105,105,1)]" />
        <div className="flex items-center mb-[41px] h-[50px]">
          <div className="w-[29%] border-2 border-[rgba(11,164,45,1)] rounded-full bg-[rgba(245,245,245,1)] h-[40px] flex items-center">
            <button
              onClick={decrementQuantity}
              className="bg-[rgba(245,245,245,1)] flex items-start justify-center text-gray-800 w-[30px] text-2xl h-[30px] pl-2 rounded-full"
            >
              -
            </button>
            <span className="mx-4 ">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="bg-[rgba(245,245,245,1)] text-gray-800 w-[30px] text-xl h-[30px] pb-[5px] pr-1 rounded-full"
            >
              +
            </button>
          </div>
          <div className="w-[30%] ml-10 text-gray-600 mb-4 pt-3 text-sm font-bold">
            Only {product.stock} items left! Don’t miss it
          </div>
        </div>
        <div>
          <button className="bg-[rgba(11,164,45,1)] text-white font-bold py-2 px-4 rounded flex items-center">
            <img src={cartIcon} alt="Cart" className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
