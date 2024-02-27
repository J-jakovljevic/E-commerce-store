import React, { FC } from "react";

import { useNavigate } from "react-router-dom";
import { HOME_PAGE_ROUTE } from "services/routes";
import {
  NavbarContainer,
  LogoIconStyled,
  ExitIconStyled,
} from "./Navbar.styled";
import useMediaQuery from "shared/hooks/useMediaQuery";
import { ModalMask } from "utils/layout";

type Props = {
  isNavbarOpen?: boolean;
  modalMaskClickHandler?: () => void;
};

const Navbar: FC<Props> = ({ isNavbarOpen, modalMaskClickHandler }) => {
  const breakpoint565 = useMediaQuery("(max-width: 565px)");

  const navigate = useNavigate();

  return (
    <>
      {(breakpoint565 || isNavbarOpen) && (
        <ModalMask onClick={modalMaskClickHandler} />
      )}

      <NavbarContainer>
        <LogoIconStyled onClick={() => navigate(HOME_PAGE_ROUTE)} />

        <ExitIconStyled />
      </NavbarContainer>
    </>
  );
};

export default Navbar;
