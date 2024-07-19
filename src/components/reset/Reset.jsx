
export const resetFilters = (
  setSelectedBrand,
  setSelectedColor,
  setProducts,
  originalProducts
) => {
  setSelectedBrand(null);
  setSelectedColor(null);
  setProducts(originalProducts);
};
