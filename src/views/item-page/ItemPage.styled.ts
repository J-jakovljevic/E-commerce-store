import styled, { keyframes } from "styled-components";
import { BackIcon } from "shared/icons/icons";
import { Column, Row } from "utils/layout";

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
  animation: ${slideRight} 251ms ease-in-out;
`;

export const ItemPageContentWrapper = styled(Column)`
  padding-left: 3.4rem;

  animation: ${slideRight} 251ms ease-in-out;
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
