import React, { FC } from "react";
import { Skeleton } from "@mui/material";

import {
  ItemCardSkeletonActionWrapper,
  ItemCardSkeletonContainer,
  ItemCardSkeletonContentWrapper,
} from "./ItemCardSkeleton.styled";

const ItemCardSkeleton: FC = () => {
  return (
    <ItemCardSkeletonContainer>
      <Skeleton
        width={427}
        height={232}
        style={{
          borderRadius: "2.2rem",
        }}
      />

      <ItemCardSkeletonContentWrapper>
        <Skeleton width={140} height={30} />

        <Skeleton width={300} height={20} />

        <ItemCardSkeletonActionWrapper>
          <Skeleton width={50} height={25} />

          <Skeleton width={30} height={30} />
        </ItemCardSkeletonActionWrapper>
      </ItemCardSkeletonContentWrapper>
    </ItemCardSkeletonContainer>
  );
};

export default ItemCardSkeleton;
