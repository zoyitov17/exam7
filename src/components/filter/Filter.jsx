
export const filterProducts = (products, selectedBrand, selectedColor) => {
  let filteredProducts = products;
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
  return filteredProducts;
};
