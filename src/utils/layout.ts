import styled, { keyframes } from "styled-components";
import colors from "./colors";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`;

export const ModalMask = styled(Column)`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(25, 25, 25, 0.7);

  overflow: hidden;

  z-index: 199;

  animation: ${fadeIn} 0.1s ease;
`;

export const ItemPageDividerWrapper = styled(Column)`
  align-items: center;

  .css-9mgopn-MuiDivider-root {
    width: 85.8rem;

    border-color: ${colors.gray100};

    border-bottom-width: 0.3rem;
    border-radius: 0.3rem;
  }
`;
