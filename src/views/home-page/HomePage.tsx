import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

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
import { GENERATE_ITEM } from "services/routes";
import { productsCategories } from "utils/constants";
import ItemCardSkeleton from "components/skeleton/item-card-skeleton/ItemCardSkeleton";
import Pagination, { ApiResponse } from "components/pagination/Pagination";

const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>();
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const navigate = useNavigate();

  /* useEffect(() => {
    const fetchProducts = async (
      skip: number,
      limit: number
    ): Promise<void> => {
      try {
        const fetchPromises = productsCategories.map(async (category) => {
          const response = await fetch(
            `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
          );

          if (!response.ok) {
            throw new Error(l.NETWORK_RESPONSE_WAS_NOT_OK);
          }

          const data: ApiResponse = await response.json();

          return data;
        });

        const allProductsArrays = await Promise.all(fetchPromises);
        const allProducts = allProductsArrays.flat();
        console.log(allProducts);
        // setProducts(allProducts);
      } catch (error) {
        console.log(l.ERROR_FETCHING_PRODUCTS((error as Error).message));
      } finally {
        setLoading(false);
      }
    };

    if (!searchText) {
      setLoading(true);

      fetchProducts(limit, skip);
    }
  }, [searchText, productsCategories, limit, skip]); */

  const fetchProducts = async (
    skip: number,
    limit: number
  ): Promise<ApiResponse> => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );

      if (!response.ok) {
        throw new Error(l.NETWORK_RESPONSE_WAS_NOT_OK);
      }

      const data: ApiResponse = await response.json();

      setProducts(data.products);

      return { products: data.products, total: data.total, skip, limit };
    } catch (error) {
      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchText) {
      fetchProducts(0, 10);
    }
  }, [searchText, productsCategories]);

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
    navigate(GENERATE_ITEM(productId.toString()));
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
          {products && !loading
            ? products.map((product) => (
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
              ))
            : [0, 1, 2, 3].map((item) => <ItemCardSkeleton key={item} />)}
        </HomePageItemCardsWrapper>

        {products && <Pagination fetchDataCallback={fetchProducts} />}
      </HomePageContentWrapper>
    </HomePageContainer>
  );
};

export default HomePage;
