import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  BackIconStyled,
  BackIconWrapper,
  ItemPageContainer,
  ItemPageContentWrapper,
} from "./ItemPage.styled";
import Navbar from "components/navbar/Navbar";
import CustomText from "components/custom-text/CustomText";
import l from "languages/en";
import { FontEnum } from "utils/fonts";
import colors from "utils/colors";
import { HOME_PAGE_ROUTE } from "services/routes";
import { productsCategories } from "utils/constants";

const ItemPage: FC = () => {
  const { itemId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (itemId) {
      // check if itemId is a valid number - user can type "1degerr" into url for itemId and it will make api call
      // for itemId 1, because parseInt will parse only the initial numeric part of the string, ignoring the non-numeric part
      if (!/^\d+$/.test(itemId)) {
        navigate(HOME_PAGE_ROUTE);

        return; // exit early to prevent further execution
      }

      const itemIdNumber = parseInt(itemId, 10);

      fetch(`https://dummyjson.com/products/${itemIdNumber}`)
        .then((response) => {
          if (!response.ok) {
            // handle HTTP errors because fetch only rejects the promise for network errors, not for HTTP errors like 404
            throw new Error();
          }

          return response.json();
        })
        .then((data) => {
          /* this endpoint returns a single product regardless on the category, but on the home page there're only products of tech categories,
             so this check prevents the case when user manually inputs itemId into URL to display items that are not part of the home page
            (for example if itemId is 11, endpoint will return a perfume oil as response) */
          if (!productsCategories.includes(data.category)) {
            navigate(HOME_PAGE_ROUTE);
          }

          console.log(data.category);
        })
        .catch(() => navigate(HOME_PAGE_ROUTE));
    }
  }, [itemId]);

  return (
    <ItemPageContainer>
      <Navbar />

      <ItemPageContentWrapper>
        <BackIconWrapper onClick={() => navigate(HOME_PAGE_ROUTE)}>
          <BackIconStyled />

          <CustomText
            fontStyle={FontEnum.CabinRegular20}
            color={colors.darkGray}
          >
            {l.BACK}
          </CustomText>
        </BackIconWrapper>
      </ItemPageContentWrapper>
    </ItemPageContainer>
  );
};

export default ItemPage;
