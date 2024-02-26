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
  ItemCardDescriptionWrapper,
  ItemCardThumbnailStyled,
  ItemCardThumbnailWrapper,
  ReadMoreLink,
} from "./ItemCard.styled";
import l from "languages/en";

type Props = {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  thumbnailClickHandler: () => void;
  readMoreClickHandler: () => void;
};

const ItemCard: FC<Props> = ({
  title,
  description,
  price,
  thumbnail,
  thumbnailClickHandler,
  readMoreClickHandler,
}) => {
  return (
    <ItemCardContainer>
      <ItemCardThumbnailWrapper>
        <ItemCardThumbnailStyled
          src={thumbnail}
          onClick={thumbnailClickHandler}
        />
      </ItemCardThumbnailWrapper>

      <ItemCardContentWrapper>
        <CustomText fontStyle={FontEnum.CabinMedium20} color={colors.darkGray}>
          {title}
        </CustomText>

        <ItemCardDescriptionWrapper>
          <ItemCardDescription
            fontStyle={FontEnum.CabinRegular16}
            color={colors.gray}
          >
            {description}
          </ItemCardDescription>

          {description.length > 46 && (
            <ReadMoreLink
              fontStyle={FontEnum.CabinItalic16}
              color={colors.blueLink}
              onClick={readMoreClickHandler}
            >
              {l.READ_MORE}
            </ReadMoreLink>
          )}
        </ItemCardDescriptionWrapper>

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
