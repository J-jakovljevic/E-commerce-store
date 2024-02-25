const l = {
  // HOME PAGE

  NETWORK_RESPONSE_WAS_NOT_OK: "Network response was not ok",
  ERROR_FETCHING_PRODUCTS: (error: string) =>
    `Error fetching products: ${error}`,
  DOLLAR_PRICE: (price: number) => `$ ${price}`,
  SEARCH_ITEM: "Search Item",
  APPLE_WATCH_SAMSUNG: "Apple Watch, Samsung S21, Macbook Pro, ...",

  // ITEM PAGE
  BACK: "Back",
};

export default l;
