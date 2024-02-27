import styled from "styled-components";
import { Column, Row } from "utils/layout";

export const ItemCardSkeletonContainer = styled(Column)`
  height: 39.7rem;
  width: 46rem;

  padding: 1.6rem;

  gap: 0.8rem;

  box-sizing: border-box;

  .css-1e1x4vv-MuiSkeleton-root {
    transform: unset;
  }

  @media (max-width: 1024px) {
    width: unset;
  }

  @media (max-width: 500px) {
    width: 34.5rem;

    padding: 1.6rem 1rem;
  }

  @media (max-width: 422px) {
    width: 100%;
  }
`;

export const ItemCardSkeletonContentWrapper = styled(Column)`
  gap: 0.8rem;

  padding: 0.8rem;
`;

export const ItemCardSkeletonActionWrapper = styled(Row)`
  padding: 0.8rem;

  align-items: center;
  justify-content: space-between;
`;
