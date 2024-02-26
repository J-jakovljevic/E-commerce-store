import styled from "styled-components";
import { Column, Row } from "utils/layout";

export const ItemPageTopContentSkeletonWrapper = styled(Row)`
  min-height: 36.8rem;

  gap: 2.4rem;

  .css-1e1x4vv-MuiSkeleton-root {
    transform: unset;
  }
`;

export const ThumbnaiSkeletonlWrapper = styled(Row)`
  padding: 0.8rem;

  box-sizing: border-box;
`;

export const ItemPageTopContentTextSkeletonWrapper = styled(Column)`
  width: 60.7rem;

  padding: 0.8rem;

  box-sizing: border-box;
`;

export const ItemPageHeaderSkeletonWrapper = styled(Column)`
  padding: 0.8rem;

  gap: 0.8rem;
`;

export const ItemPageBottomContentSkeletonWrapper = styled(Column)`
  padding: 0.8rem;

  gap: 1.6rem;

  .css-1e1x4vv-MuiSkeleton-root {
    transform: unset;
  }
`;

export const ItemPageDescriptionSkeletonWrapper = styled(Column)`
  padding: 1.6rem 0.8rem;

  gap: 0.8rem;
`;
