import React, { FC } from "react";
import { Skeleton } from "@mui/material";

import {
  ItemCardSkeletonActionWrapper,
  ItemCardSkeletonContainer,
  ItemCardSkeletonContentWrapper,
} from "./ItemCardSkeleton.styled";
import useMediaQuery from "shared/hooks/useMediaQuery";

const ItemCardSkeleton: FC = () => {
  const breakpoint1024 = useMediaQuery("(max-width: 1024px)");
  const breakpoint495 = useMediaQuery("(max-width: 495px)");

  return (
    <ItemCardSkeletonContainer>
      <Skeleton
        width={breakpoint1024 ? "100%" : 427}
        height={232}
        style={{
          borderRadius: "2.2rem",
        }}
      />

      <ItemCardSkeletonContentWrapper>
        <Skeleton width={140} height={30} />

        <Skeleton width={breakpoint495 ? "100%" : 300} height={20} />

        <ItemCardSkeletonActionWrapper>
          <Skeleton width={50} height={25} />

          <Skeleton width={30} height={30} />
        </ItemCardSkeletonActionWrapper>
      </ItemCardSkeletonContentWrapper>
    </ItemCardSkeletonContainer>
  );
};

export default ItemCardSkeleton;
