const l = {
  NETWORK_RESPONSE_WAS_NOT_OK: "Network response was not ok",
  ERROR_FETCHING_PRODUCTS: (error: string) =>
    `Error fetching products: ${error}`,
  DOLLAR_PRICE: (price: number) => `$ ${price}`,
};

export default l;
