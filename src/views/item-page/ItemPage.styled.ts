import styled, { keyframes } from "styled-components";
import { BackIcon } from "shared/icons/icons";
import { Column, Row } from "utils/layout";
import colors from "utils/colors";

const slideRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ItemPageContainer = styled(Row)`
  gap: 3.4rem;

  animation: ${slideRight} 251ms ease-in-out;
`;

export const ItemPageContentWrapper = styled(Column)`
  padding: 3.2rem 2.4rem 4.3rem 2.4rem;

  gap: 1.6rem;
`;

export const BackIconWrapper = styled(Row)`
  width: 8.8rem;

  padding: 0.8rem;

  gap: 0.8rem;

  box-sizing: border-box;

  cursor: pointer;
`;

export const BackIconStyled = styled(BackIcon)`
  width: 2.4rem;
  height: 2.4rem;
`;

export const ItemPageTopContentWrapper = styled(Row)`
  min-height: 36.8rem;

  gap: 2.4rem;
`;

export const ItemPageThumbnailWrapper = styled(Row)`
  padding: 0.8rem;
`;

export const ItemPageThumbnailStyled = styled.img`
  min-width: 25.8rem;
  height: 31.8rem;

  border-radius: 1.3rem;
`;

export const ItemPageTopContentTextWrapper = styled(Column)`
  width: 60.7rem;

  padding: 0.8rem;

  box-sizing: border-box;

  .description {
    padding: 0.8rem;
  }
`;

export const ItemPageHeaderWrapper = styled(Column)`
  padding: 0.8rem;

  gap: 0.8rem;
`;

export const ItemPageRatingWrapper = styled(Row)`
  padding: 1.6rem 0.8rem;

  gap: 0.8rem;

  align-items: center;

  .css-d1ybhn-MuiRating-root {
    color: ${colors.green};
  }
`;

export const ItemPageBottomContentWrapper = styled(Column)`
  padding: 0.8rem;

  gap: 1.6rem;
`;

export const ItemPageDividerWrappeer = styled(Column)`
  align-items: center;

  .css-9mgopn-MuiDivider-root {
    width: 85.8rem;

    border-color: ${colors.gray100};

    border-bottom-width: 0.3rem;
    border-radius: 0.3rem;
  }
`;

export const ItemPageDescriptionWrapper = styled(Column)`
  padding: 1.6rem 0.8rem;

  gap: 0.8rem;
`;
