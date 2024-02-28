import styled, { keyframes } from "styled-components";
import colors from "./colors";
import { MenuIcon } from "shared/icons/icons";

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

    @media (max-width: 1000px) {
      width: 60rem;
    }

    @media (max-width: 700px) {
      width: 50rem;
    }

    @media (max-width: 550px) {
      width: 40rem;
    }

    @media (max-width: 480px) {
      width: 30rem;
    }

    @media (max-width: 380px) {
      width: 20rem;
    }
  }
`;

export const MenuIconStyled = styled(MenuIcon)<{ top?: string }>`
  position: relative;
  ${(props) => props.top && `top: ${props.top};`};

  min-width: 2.4rem;
  min-height: 2.4rem;
  width: 2.4rem;
  height: 2.4rem;

  cursor: pointer;
`;
