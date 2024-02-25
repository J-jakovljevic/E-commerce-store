import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";

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

  const [searchText, setSearchText] = useState("");
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

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

    if (!searchText) {
      fetchProducts();
    }
  }, [searchText]);

  const fetchSearcedData = (query: string) => {
    const sanitizedQuery = encodeURIComponent(query); // encodes special characters including: , / ? : @ & = + $ #

    fetch(`https://dummyjson.com/products/search?q=${sanitizedQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;

    setSearchText(inputText);

    // clear previous timeout
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // set a new timeout
    setTypingTimeout(
      setTimeout(() => {
        if (inputText) {
          fetchSearcedData(inputText);
        }
      }, 750)
    );
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    // clear timeout if the user presses enter
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    if (event.key === "Enter" && searchText) {
      fetchSearcedData(searchText);
    }
  };

  const onThumbnailClickHandler = (productId: number) => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

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
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
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
                thumbnailClickHandler={() =>
                  onThumbnailClickHandler(product.id)
                }
              />
            ))}
        </HomePageItemCardsWrapper>
      </HomePageContentWrapper>
    </HomePageContainer>
  );
};

export default HomePage;
