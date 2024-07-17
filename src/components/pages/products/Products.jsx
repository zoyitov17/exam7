import React, { useEffect, useState } from "react";
import cartIcon from "../../../assets/images/button-cart.svg";
import { useBrands } from "../../brands/Brands";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const brands = useBrands();

  useEffect(() => {
    fetch("https://headphones-server.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="w-[100%] mt-[65px] h-auto flex flex-col items-center justify-center">
      <div className="w-[100%] flex items-center justify-center h-[85px] bg-[rgba(213,248,207,1)]">
        <ul className="w-[94%] flex items-center justify-between h-[30px]">
          <li className="text-[22px] font-medium leading-[30px] text-center text-[rgba(11,164,45,1)]">
            Filter By:
          </li>
          <li className="text-xl font-medium leading-[30px] text-center text-[rgba(11,164,45,1)]">
            Sort By Price
          </li>
        </ul>
      </div>

      <div className="w-[100%] h-auto flex flex-row">
        <div className="mt-[65px] w-[280px] h-auto">
          <div className="w-[80%] h-[340px] mx-auto my-0 pl-[5px] border-t-2 border-dashed border-[#464444cc]">
            <h2 className="text-lg font-bold mb-2 mt-[15px]">BRAND</h2>
            <ul className="list-none p-0">
              {brands.map((brand, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    id={brand}
                    className="mr-3 w-[18px] h-[18px] border-2 border-solid border-[#0ba42d]"
                    style={{
                      appearance: "none",
                      backgroundColor: "#fff",
                      borderRadius: "3px",
                    }}
                  />
                  <label htmlFor={brand} className="text-[rgba(25,13,38,1)] ">
                    {brand}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-[90%]">
          <ul className="w-[96%] mx-auto my-0 h-auto mt-[67px] flex flex-wrap justify-between">
            {products.map((product) => (
              <li
                key={product.id}
                className="w-[300px] h-[560px] p-4 rounded-lg max-w-[30%] mb-4 flex flex-col"
                style={{
                  backgroundColor: "rgba(244,244,244,1)",
                  border: "1px solid rgba(244,244,244,1)",
                }}
              >
                <div className="bg-[rgba(244,244,244,1)] rounded-md w-[100%] h-[300px] border border-[rgba(244,244,244,1)] mb-4">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-[100%] h-[100%] object-cover rounded"
                  />
                </div>
                <Link
                  to={`/product/${product.id}`}
                  className="text-lg font-bold mb-2"
                >
                  {product.name}
                </Link>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="mb-4">
                  <div className="w-[40%] flex mb-[10px] items-center mt-[10px] justify-between">
                    {product.color_options.map((c) => (
                      <div
                        key={c}
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: c }}
                      ></div>
                    ))}
                  </div>
                  <span className="text-lg font-bold">${product.price}</span>
                </div>
                <div className="mt-auto">
                  <button className="bg-[rgba(11,164,45,1)] text-white font-bold py-2 px-4 rounded flex items-center">
                    <img src={cartIcon} alt="Cart" className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
