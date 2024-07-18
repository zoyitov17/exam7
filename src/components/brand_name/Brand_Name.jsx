import { useState, useEffect } from "react";

export const useBrands = () => {
  const [Brand_Name, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://headphones-server.onrender.com/brands")
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  return Brand_Name;
};
