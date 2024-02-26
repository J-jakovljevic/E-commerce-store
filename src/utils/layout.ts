import styled from "styled-components";
import colors from "./colors";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
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
