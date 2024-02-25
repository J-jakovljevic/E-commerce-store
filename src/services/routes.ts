// HOME PAGE
export const HOME_PAGE_ROUTE = "/home-page";

// ITEM PAGE

export const ITEM = () => `${HOME_PAGE_ROUTE}/item-view/:itemId`;
export const GENERATE_ITEM = (itemId: string) =>
  ITEM().replace(":itemId", itemId);
