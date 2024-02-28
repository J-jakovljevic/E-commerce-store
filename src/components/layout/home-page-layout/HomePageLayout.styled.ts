import styled from "styled-components";
import colors from "utils/colors";
import { Row } from "utils/layout";

export const HomePageLayoutContainer = styled(Row)`
  height: 100%;

  padding: 1.6rem;

  background: ${colors.lightGray};

  box-sizing: border-box;

  overflow: auto;
`;
