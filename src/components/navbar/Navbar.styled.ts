import styled from "styled-components";

import { Column } from "utils/layout";
import colors from "utils/colors";
import { ExitIcon, LogoIcon } from "shared/icons/icons";

export const NavbarContainer = styled(Column)`
  position: fixed;

  width: 7.2rem;
  height: calc(100% - 3rem);

  justify-content: space-between;
  align-items: center;

  padding: 0.8rem 1.2rem;

  border-radius: 0.8rem;

  box-sizing: border-box;

  background: ${colors.white};

  z-index: 50;

  @media (max-width: 620px) {
    z-index: 200;

    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
  }
`;

export const LogoIconStyled = styled(LogoIcon)`
  padding: 1.6rem;

  cursor: pointer;
`;

export const ExitIconStyled = styled(ExitIcon)`
  padding: 0.8rem;
`;
