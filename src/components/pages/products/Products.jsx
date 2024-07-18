import React, { useState, useEffect } from "react";
import axios from "axios";
import cartIcon from "../../../assets/images/button-cart.svg";
import { useProducts } from "../../use_products/Use_Products";
import { Link } from "react-router-dom";
import { useCart } from "../../pages/cart/CartContext"; 

const Products = () => {
  const { products, filterByBrand, setProducts, originalProducts } =
    useProducts();
  const [sortedByPrice, setSortedByPrice] = useState(false);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchBrandsAndColors = async () => {
      try {
        const brandsResponse = await axios.get(
          "https://headphones-server.onrender.com/brands"
        );
        setBrands(brandsResponse.data);

        const colorsResponse = await axios.get(
          "https://headphones-server.onrender.com/colors"
        );
        setColors(colorsResponse.data);
      } catch (error) {
        console.error("Error fetching brands and colors:", error);
      }
    };

    fetchBrandsAndColors();
  }, []);

  const sortByPrice = () => {
    if (sortedByPrice) {
      setProducts(originalProducts);
    } else {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    }
    setSortedByPrice(!sortedByPrice);
  };

  const resetFilters = () => {
    setSelectedBrand(null);
    setSelectedColor(null);
    setProducts(originalProducts);
  };

  const filterProducts = () => {
    let filteredProducts = originalProducts;
    if (selectedBrand) {
      filteredProducts = filteredProducts.filter(
        (product) => product.brand === selectedBrand
      );
    }
    if (selectedColor) {
      filteredProducts = filteredProducts.filter((product) =>
        product.color_options.includes(selectedColor)
      );
    }
    setProducts(filteredProducts);
  };

  useEffect(() => {
    filterProducts();
  }, [selectedBrand, selectedColor]);

  return (
    <div className="w-[100%] mt-[65px] h-auto flex flex-col items-center justify-center">
      <div className="w-[100%] flex items-center justify-center h-[85px] bg-[rgba(213,248,207,1)]">
        <ul className="w-[94%] flex items-center justify-between h-[30px]">
          <li className="text-[22px] font-medium leading-[30px] text-center text-[rgba(11,164,45,1)]">
            Filter By:
          </li>
          <li
            className="text-xl font-medium leading-[30px] text-center text-[rgba(11,164,45,1)] cursor-pointer"
            onClick={sortByPrice}
          >
            Sort By Price
          </li>
        </ul>
      </div>

      <div className="w-[100%] h-auto flex flex-row">
        <div className="mt-[65px] w-[300px] h-auto">
          <div className="w-[80%] h-auto mx-auto my-0 pl-[5px] border-t-2 border-dashed border-[#464444cc]">
            <h2 className="text-lg font-bold mb-2 mt-[15px]">BRAND</h2>
            <ul>
              {brands.map((brand) => (
                <li key={brand.id}>
                  <button
                    onClick={() => setSelectedBrand(brand.name)}
                    className={`${
                      selectedBrand === brand.name ? "font-bold" : ""
                    }`}
                  >
                    {brand.name}
                  </button>
                </li>
              ))}
            </ul>

            <h2 className="text-lg font-bold mb-2 mt-[15px] border-t-2 pb-[5px] border-dashed pt-[10px] border-[#464444cc]">
              COLOR
            </h2>
            <ul className="grid grid-cols-5 gap-2">
              {colors.map((color) => (
                <li key={color}>
                  <button
                    onClick={() => setSelectedColor(color)}
                    className={`${
                      selectedColor === color
                        ? "border-2 rounded-[50%] h-[83%] border-black"
                        : ""
                    }`}
                  >
                    <span
                      className="w-6 h-6 inline-block rounded-full"
                      style={{ backgroundColor: color }}
                    ></span>
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={resetFilters}
              className="bg-[rgba(11,164,45,1)] text-white font-bold py-2 px-4 rounded mt-4"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="w-[80%] mx-auto my-0 pr-7">
          <ul className="w-[100%] mx-auto my-0 h-auto mt-[67px] flex flex-wrap justify-between">
            {products.map((product) => (
              <li
                key={product.id}
                className="w-[300px] h-[560px] p-4 rounded-lg max-w-[30%] mb-4 flex flex-col"
                style={{
                  backgroundColor: "rgba(244,244,244,1)",
                  border: "1px solid rgba(244,244,244,1)",
                }}
              >
                <div className="bg-[rgba(244,244,244,1)] rounded-md w-[100%] h-[55%] border border-[rgba(244,244,244,1)] mb-4">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="h-[100%] object-cover rounded"
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
                  <button
                    className="bg-[rgba(11,164,45,1)] text-white font-bold py-2 px-4 rounded flex items-center"
                    onClick={() => addToCart(product)}
                  >
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
