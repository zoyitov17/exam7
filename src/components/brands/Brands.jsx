import { useState, useEffect } from "react";

export const useBrands = () => {
  const [Brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://headphones-server.onrender.com/brands")
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  return Brands;
};


