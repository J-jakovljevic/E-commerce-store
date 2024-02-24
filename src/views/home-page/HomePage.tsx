import React, { FC, useEffect, useState } from "react";

import {
  HomePageContainer,
  HomePageContentWrapper,
  HomePageItemCardsWrapper,
  HomePageSearchBarLabel,
  HomePageSearchBarWrapper,
  HomePageSearchBarStyled,
} from "./HomePage.styled";
import Navbar from "components/navbar/Navbar";
import l from "languages/en";
import { Product } from "models/productModel";
import ItemCard from "components/item-card/ItemCard";
import { FontEnum } from "utils/fonts";
import colors from "utils/colors";

const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>();

  const productsCategories = [
    "smartphones",
    "laptops",
    "mens-watches",
    "womens-watches",
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchPromises = productsCategories.map(async (category) => {
          const response = await fetch(
            `https://dummyjson.com/products/category/${category}`
          );

          if (!response.ok) {
            throw new Error(l.NETWORK_RESPONSE_WAS_NOT_OK);
          }

          const data = await response.json();

          return data.products;
        });

        const allProductsArrays = await Promise.all(fetchPromises);
        const allProducts = allProductsArrays.flat();

        setProducts(allProducts);
      } catch (error) {
        console.log(l.ERROR_FETCHING_PRODUCTS((error as Error).message));
      }
    };

    fetchProducts();
  }, []);

  return (
    <HomePageContainer>
      <Navbar />

      <HomePageContentWrapper>
        <HomePageSearchBarWrapper>
          <HomePageSearchBarLabel
            fontStyle={FontEnum.CabinRegular16}
            color={colors.gray}
          >
            {l.SEARCH_ITEM}
          </HomePageSearchBarLabel>

          <HomePageSearchBarStyled
            type="text"
            placeholder={l.APPLE_WATCH_SAMSUNG}
          />
        </HomePageSearchBarWrapper>

        <HomePageItemCardsWrapper>
          {products &&
            products.map((product) => (
              <ItemCard
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                thumbnail={product.thumbnail}
              />
            ))}
        </HomePageItemCardsWrapper>
      </HomePageContentWrapper>
    </HomePageContainer>
  );
};

export default HomePage;
