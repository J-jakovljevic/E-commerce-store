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
  width: 100%;

  padding-right: 10.2rem;

  box-sizing: border-box;

  animation: ${slideRight} 251ms ease-in-out;

  @media (max-width: 1300px) {
    padding-right: 1rem;
  }
`;

export const ItemPageContentWrapper = styled(Column)<{ isSkeleton?: boolean }>`
  width: 100%;

  padding: 3.2rem 2.4rem 4.3rem 2.4rem;
  margin-left: 10.6rem;

  gap: 1.6rem;

  box-sizing: border-box;

  @media (max-width: 930px) {
    ${(props) => props.isSkeleton && "margin-left: 7rem;"}
  }

  @media (max-width: 752px) {
    padding: 3.2rem 1.4rem 4.3rem 1.4rem;
    margin-left: 7rem;
  }

  @media (max-width: 620px) {
    padding: 3.2rem 1.4rem 4.3rem 1.4rem;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    padding: 3.2rem 0 4.3rem 0;
  }
`;

export const ItemPageButtonsWrapper = styled(Row)`
  @media (max-width: 620px) {
    gap: 1rem;

    align-items: center;
  }
`;

export const BackIconWrapper = styled(Row)`
  width: 8.8rem;

  padding: 0.8rem;

  gap: 0.8rem;

  box-sizing: border-box;

  cursor: pointer;
`;

export const ItemPageContentResponsiveWrapper = styled(Column)`
  max-width: 90.5rem;
  width: 100%;

  gap: 1.6rem;
`;

export const BackIconStyled = styled(BackIcon)`
  width: 2.4rem;
  height: 2.4rem;
`;

export const ItemPageTopContentWrapper = styled(Row)`
  min-height: 36.8rem;

  gap: 2.4rem;

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 860px) {
    flex-direction: column;

    align-items: flex-start;

    gap: 1rem;
  }

  @media (max-width: 515px) {
    align-items: flex-start;
  }
`;

export const ItemPageThumbnailWrapper = styled(Row)`
  padding: 0.8rem;
`;

export const ItemPageThumbnailStyled = styled.img`
  min-width: 25.8rem;
  max-width: 50rem;
  height: 31.8rem;

  border-radius: 1.3rem;

  @media (max-width: 1300px) {
    min-width: 34rem;
    width: 100%;
    height: 27rem;
  }

  @media (max-width: 365px) {
    min-width: 100%;
  }
`;

export const ItemPageTopContentTextWrapper = styled(Column)`
  width: auto;

  padding: 0.8rem;

  box-sizing: border-box;

  .description {
    padding: 0.8rem;
  }

  @media (max-width: 860px) {
    height: 100%;
  }

  @media (max-width: 440px) {
    width: 100%;
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

export const ItemPageDescriptionWrapper = styled(Column)`
  padding: 1.6rem 0.8rem;

  gap: 0.8rem;

  @media (max-width: 860px) {
    padding: 1.6rem 0.8rem 3.6rem 0.8rem;
  }
`;
