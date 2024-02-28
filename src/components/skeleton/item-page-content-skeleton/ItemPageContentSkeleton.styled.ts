import styled from "styled-components";
import { Column, Row } from "utils/layout";

export const ItemPageContentResponsiveSkeletonWrapper = styled(Column)`
  max-width: 90.5rem;
  width: 100%;

  gap: 1.6rem;
`;

export const ItemPageTopContentSkeletonWrapper = styled(Row)`
  min-height: 36.8rem;

  gap: 2.4rem;

  .css-1e1x4vv-MuiSkeleton-root {
    transform: unset;
  }

  @media (max-width: 980px) {
    width: 100%;
  }

  @media (max-width: 860px) {
    flex-direction: column;

    align-items: flex-start;

    gap: 1rem;
  }
`;

export const ThumbnaiSkeletonlWrapper = styled(Row)`
  padding: 0.8rem;

  box-sizing: border-box;

  @media (max-width: 980px) {
    min-width: 34rem;
  }

  @media (max-width: 365px) {
    min-width: 100%;
  }
`;

export const ItemPageTopContentTextSkeletonWrapper = styled(Column)`
  width: 60.7rem;

  padding: 0.8rem;

  box-sizing: border-box;

  @media (max-width: 1285px) {
    width: 100%;
  }
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
