import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Divider } from "@mui/material";

import {
  BackIconStyled,
  BackIconWrapper,
  ItemPageBottomContentWrapper,
  ItemPageButtonsWrapper,
  ItemPageContainer,
  ItemPageContentResponsiveWrapper,
  ItemPageContentWrapper,
  ItemPageDescriptionWrapper,
  ItemPageHeaderWrapper,
  ItemPageRatingWrapper,
  ItemPageThumbnailStyled,
  ItemPageThumbnailWrapper,
  ItemPageTopContentTextWrapper,
  ItemPageTopContentWrapper,
} from "./ItemPage.styled";
import Navbar from "components/navbar/Navbar";
import CustomText from "components/custom-text/CustomText";
import l from "languages/en";
import { FontEnum } from "utils/fonts";
import colors from "utils/colors";
import { HOME_PAGE_ROUTE } from "services/routes";
import { Product } from "models/productModel";
import ItemPageContentSkeleton from "components/skeleton/item-page-content-skeleton/ItemPageContentSkeleton";
import { ItemPageDividerWrapper, MenuIconStyled } from "utils/layout";
import useMediaQuery from "shared/hooks/useMediaQuery";

const ItemPage: FC = () => {
  const [item, setItem] = useState<Product>();
  const [loading, setLoading] = useState(true);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const navigate = useNavigate();

  const { itemId } = useParams();

  const breakpoint620 = useMediaQuery("(max-width: 620px)");
  const breakpoint800 = useMediaQuery("(max-width: 800px)");

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
        .then((data) => setItem(data))
        .catch(() => navigate(HOME_PAGE_ROUTE))
        .finally(() => setLoading(false));
    }
  }, [itemId]);

  return (
    <ItemPageContainer>
      {(isNavbarOpen || !breakpoint620) && (
        <Navbar
          isNavbarOpen={isNavbarOpen}
          modalMaskClickHandler={() => setIsNavbarOpen(false)}
        />
      )}

      <ItemPageContentWrapper>
        <ItemPageButtonsWrapper>
          {breakpoint620 && !isNavbarOpen && (
            <MenuIconStyled onClick={() => setIsNavbarOpen(true)} />
          )}

          <BackIconWrapper onClick={() => navigate(HOME_PAGE_ROUTE)}>
            <BackIconStyled />

            <CustomText
              fontStyle={FontEnum.CabinRegular20}
              color={colors.darkGray}
            >
              {l.BACK}
            </CustomText>
          </BackIconWrapper>
        </ItemPageButtonsWrapper>

        {item && !loading ? (
          <ItemPageContentResponsiveWrapper>
            <ItemPageTopContentWrapper>
              <ItemPageThumbnailWrapper>
                <ItemPageThumbnailStyled src={item.thumbnail} />
              </ItemPageThumbnailWrapper>

              <ItemPageTopContentTextWrapper>
                <ItemPageHeaderWrapper>
                  <CustomText
                    fontStyle={
                      breakpoint800
                        ? FontEnum.CabinBold41
                        : FontEnum.CabinBold61
                    }
                    color={colors.darkGray}
                  >
                    {item.title}
                  </CustomText>

                  <CustomText
                    fontStyle={FontEnum.CabinMedium31}
                    color={colors.gray100}
                  >
                    {item.brand}
                  </CustomText>
                </ItemPageHeaderWrapper>

                <ItemPageRatingWrapper>
                  <Rating
                    name="read-only"
                    value={item.rating}
                    size="large"
                    readOnly
                    precision={0.01}
                  />

                  <CustomText
                    fontStyle={FontEnum.CabinRegular20}
                    color={colors.green}
                  >
                    {l.RATING(item.rating)}
                  </CustomText>
                </ItemPageRatingWrapper>

                <CustomText
                  fontStyle={
                    breakpoint800
                      ? FontEnum.CabinMedium25
                      : FontEnum.CabinMedium31
                  }
                  color={colors.darkGray}
                >
                  {l.DOLLAR_PRICE(item.price)}
                </CustomText>

                <CustomText
                  fontStyle={FontEnum.CabinRegular20}
                  color={colors.black}
                  className="description"
                >
                  {item.description}
                </CustomText>
              </ItemPageTopContentTextWrapper>
            </ItemPageTopContentWrapper>

            <ItemPageBottomContentWrapper>
              <ItemPageDividerWrapper>
                <Divider />
              </ItemPageDividerWrapper>

              <ItemPageDescriptionWrapper>
                <CustomText
                  fontStyle={FontEnum.CabinMedium31}
                  color={colors.darkGray}
                >
                  {l.DESCRIPTION}
                </CustomText>

                <CustomText
                  fontStyle={FontEnum.CabinRegular20}
                  color={colors.gray}
                >
                  {item.description} {item.description}
                  {item.description}
                  {item.description}
                  {item.description}
                  {item.description}
                </CustomText>
              </ItemPageDescriptionWrapper>
            </ItemPageBottomContentWrapper>
          </ItemPageContentResponsiveWrapper>
        ) : (
          <ItemPageContentSkeleton />
        )}
      </ItemPageContentWrapper>
    </ItemPageContainer>
  );
};

export default ItemPage;
