
export const sortProducts = (products, sortByPrice) => {
  if (sortByPrice) {
    return [...products].sort((a, b) => a.price - b.price);
  }
  return products;
};
