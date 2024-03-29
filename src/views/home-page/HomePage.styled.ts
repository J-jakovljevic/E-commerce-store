import styled, { keyframes } from "styled-components";
import { Column, Row } from "utils/layout";
import CustomText from "components/custom-text/CustomText";

const slideLeft = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const HomePageContainer = styled(Row)`
  width: 100%;

  animation: ${slideLeft} 251ms ease-in-out;
`;

export const HomePageContentContainer = styled(Column)`
  width: 100%;
  height: 100%;

  align-items: center;

  gap: 1.8rem;

  padding: 0.8rem 22.6rem 3.4rem 20.3rem;

  @media (max-width: 1130px) {
    padding: 0.8rem 15rem 3.4rem 15rem;
  }

  @media (max-width: 800px) {
    padding: 0.8rem 0 3.4rem 10rem;
  }

  @media (max-width: 620px) {
    padding: 0.8rem 0 3.4rem 1rem;
  }

  @media (max-width: 420px) {
    box-sizing: border-box;
  }
`;

export const HomePageTopContentWrapper = styled(Row)`
  @media (max-width: 565px) {
    width: 100%;

    gap: 0.8rem;
  }
`;

export const HomePageContentWrapper = styled(Column)`
  width: 100%;

  align-items: center;

  padding-bottom: 4rem;

  gap: 3rem;
`;

export const HomePageSearchBarWrapper = styled(Column)`
  width: 50.7rem;

  padding: 0.8rem;

  gap: 0.8rem;

  @media (max-width: 495px) {
    width: 100%;
  }
`;

export const HomePageSearchBarLabel = styled(CustomText)`
  padding-left: 0.8rem;
`;

export const HomePageSearchBarStyled = styled.input`
  height: 5.6rem;

  border: none;
  border-radius: 1.3rem;

  box-shadow: 0px 5px 8px 0px rgba(26, 31, 22, 0.15);
  box-sizing: border-box;

  outline: unset;

  padding-block: 1.6rem !important; // top and bottom padding
  padding-inline: 2.4rem !important; // left and right

  font-family: "Cabin";
  font-weight: 500;
  font-size: 2rem;

  @media (max-width: 422px) {
    width: 100%;
  }
`;

export const HomePageItemCardsWrapper = styled(Row)`
  flex-wrap: wrap;

  height: 100%;
  width: 100%;

  gap: 3.2rem;

  justify-content: center;
`;

export const NoResultsFoundWrapper = styled(Row)`
  align-items: center;

  padding: 5rem 0;
`;
