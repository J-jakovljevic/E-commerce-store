import styled from "styled-components";

import { Column } from "utils/layout";
import colors from "utils/colors";
import { ExitIcon, LogoIcon } from "shared/icons/icons";

export const NavbarContainer = styled(Column)`
  width: 7.2rem;
  height: 100%;

  justify-content: space-between;
  align-items: center;

  padding: 0.8rem 1.2rem;

  border-radius: 0.8rem;

  background: ${colors.white};
`;

export const LogoIconStyled = styled(LogoIcon)`
  padding: 1.6rem;

  cursor: pointer;
`;

export const ExitIconStyled = styled(ExitIcon)`
  padding: 0.8rem;
`;
