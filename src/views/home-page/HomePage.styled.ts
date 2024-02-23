import styled from "styled-components";
import { Column, Row } from "utils/layout";
import colors from "utils/colors";

export const HomePageContainer = styled(Row)`
  height: 100%;

  padding: 1.6rem;

  background: ${colors.lightGray};

  box-sizing: border-box;

  overflow: auto;
`;

export const HomePageContentWrapper = styled(Column)`
  width: 100%;
  height: 100%;

  align-items: center;

  gap: 3.4rem;

  padding: 0.8rem 22.6rem 3.4rem 20.3rem;
`;

export const HomePageSearchBarWrapper = styled(Column)`
  gap: 0.8rem;
`;

export const HomePageItemCardsWrapper = styled(Row)`
  flex-wrap: wrap;

  height: 100%;
  width: 100%;

  gap: 3.2rem;

  justify-content: center;
`;
