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
  HomePageContentContainer,
  HomePageItemCardsWrapper,
  HomePageSearchBarLabel,
  HomePageSearchBarWrapper,
  HomePageSearchBarStyled,
  NoResultsFoundWrapper,
  HomePageContentWrapper,
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
import CustomText from "components/custom-text/CustomText";
import Pagination from "components/pagination/Pagination";

const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>();
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const fetchProducts = async (skip: number, limit: number) => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );

      if (!response.ok) {
        throw new Error(l.NETWORK_RESPONSE_WAS_NOT_OK);
      }

      const data = await response.json();

      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / limit));
    } catch (error) {
      console.log(l.ERROR_FETCHING_PRODUCTS((error as Error).message));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchText) {
      fetchProducts((currentPage - 1) * 10, 10);
    }
  }, [searchText, productsCategories, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const fetchSearcedData = (query: string) => {
    const sanitizedQuery = encodeURIComponent(query); // encodes special characters including: , / ? : @ & = + $ #

    fetch(`https://dummyjson.com/products/search?q=${sanitizedQuery}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
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

      <HomePageContentContainer>
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
            {products && !loading ? (
              products.length !== 0 ? (
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
                    readMoreClickHandler={() =>
                      navigate(GENERATE_ITEM(product.id.toString()))
                    }
                  />
                ))
              ) : (
                <NoResultsFoundWrapper>
                  <CustomText
                    fontStyle={FontEnum.CabinRegular20}
                    color={colors.gray}
                  >
                    {l.NO_RESULTS_FOUND}
                  </CustomText>
                </NoResultsFoundWrapper>
              )
            ) : (
              [0, 1, 2, 3].map((item) => <ItemCardSkeleton key={item} />)
            )}
          </HomePageItemCardsWrapper>

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </HomePageContentWrapper>
      </HomePageContentContainer>
    </HomePageContainer>
  );
};

export default HomePage;
