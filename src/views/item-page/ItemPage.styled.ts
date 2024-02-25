import { BackIcon } from "shared/icons/icons";
import styled from "styled-components";
import colors from "utils/colors";
import { Column, Row } from "utils/layout";

export const ItemPageContainer = styled(Row)`
  height: 100%;

  padding: 1.6rem;

  background: ${colors.lightGray};

  box-sizing: border-box;

  overflow: auto;
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
