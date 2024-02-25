import { BackIcon } from "shared/icons/icons";
import styled, { keyframes } from "styled-components";
import colors from "utils/colors";
import { Column, Row } from "utils/layout";

const slideRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 1;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ItemPageContainer = styled(Row)`
  height: 100%;

  padding: 1.6rem;

  background: ${colors.lightGray};

  box-sizing: border-box;

  overflow: auto;

  animation: ${slideRight} 251ms ease-in-out;
`;

export const ItemPageContentWrapper = styled(Column)`
  padding-left: 3.4rem;
`;

export const BackIconWrapper = styled(Row)`
  padding: 0.8rem;

  gap: 0.8rem;

  cursor: pointer;
`;

export const BackIconStyled = styled(BackIcon)`
  width: 2.4rem;
  height: 2.4rem;
`;
