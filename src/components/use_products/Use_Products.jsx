import { useState, useEffect } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    fetch("https://headphones-server.onrender.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setOriginalProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filterByBrand = (brand) => {
    if (brand) {
      setProducts(
        originalProducts.filter((product) => product.brand === brand)
      );
    } else {
      setProducts(originalProducts);
    }
  };

  return { products, filterByBrand, setProducts, originalProducts };
};
