import React, { FC } from "react";

import CustomText from "components/custom-text/CustomText";
import { FontEnum } from "utils/fonts";
import colors from "utils/colors";
import {
  AddItemIconStyled,
  ItemCardActionWrapper,
  ItemCardContainer,
  ItemCardContentWrapper,
  ItemCardDescription,
  ItemCardThumbnailStyled,
  ItemCardThumbnailWrapper,
} from "./ItemCard.styled";
import l from "languages/en";

type Props = {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

const ItemCard: FC<Props> = ({ title, description, price, thumbnail }) => {
  return (
    <ItemCardContainer>
      <ItemCardThumbnailWrapper>
        <ItemCardThumbnailStyled src={thumbnail} />
      </ItemCardThumbnailWrapper>

      <ItemCardContentWrapper>
        <CustomText fontStyle={FontEnum.CabinMedium20} color={colors.darkGray}>
          {title}
        </CustomText>

        <ItemCardDescription
          fontStyle={FontEnum.CabinRegular16}
          color={colors.gray}
        >
          {description}
        </ItemCardDescription>

        <ItemCardActionWrapper>
          <CustomText
            fontStyle={FontEnum.CabinMedium20}
            color={colors.darkGray}
          >
            {l.DOLLAR_PRICE(price)}
          </CustomText>

          <AddItemIconStyled />
        </ItemCardActionWrapper>
      </ItemCardContentWrapper>
    </ItemCardContainer>
  );
};

export default ItemCard;
