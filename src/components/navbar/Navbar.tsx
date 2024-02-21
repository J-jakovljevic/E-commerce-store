import React, { FC } from "react";

import { useNavigate } from "react-router-dom";
import { HOME_PAGE_ROUTE } from "services/routes";
import {
  NavbarContainer,
  LogoIconStyled,
  ExitIconStyled,
} from "./Navbar.styled";

const Navbar: FC = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <LogoIconStyled onClick={() => navigate(HOME_PAGE_ROUTE)} />

      <ExitIconStyled />
    </NavbarContainer>
  );
};

export default Navbar;
