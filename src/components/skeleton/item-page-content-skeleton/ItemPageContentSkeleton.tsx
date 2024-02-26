import React, { FC } from "react";
import { Divider, Skeleton } from "@mui/material";

import {
  ItemPageBottomContentSkeletonWrapper,
  ItemPageDescriptionSkeletonWrapper,
  ItemPageHeaderSkeletonWrapper,
  ItemPageTopContentSkeletonWrapper,
  ItemPageTopContentTextSkeletonWrapper,
  ThumbnaiSkeletonlWrapper,
} from "./ItemPageContentSkeleton.styled";
import { ItemPageDividerWrapper } from "utils/layout";

const ItemPageContentSkeleton: FC = () => {
  return (
    <>
      <ItemPageTopContentSkeletonWrapper>
        <ThumbnaiSkeletonlWrapper>
          <Skeleton
            width={520}
            height={300}
            style={{ borderRadius: "1.3rem" }}
          />
        </ThumbnaiSkeletonlWrapper>

        <ItemPageTopContentTextSkeletonWrapper>
          <ItemPageHeaderSkeletonWrapper>
            <Skeleton width={300} height={50} />

            <Skeleton width={200} height={40} />

            <Skeleton width={170} height={25} />

            <Skeleton width={70} height={30} />

            <Skeleton width={450} height={90} />
          </ItemPageHeaderSkeletonWrapper>
        </ItemPageTopContentTextSkeletonWrapper>
      </ItemPageTopContentSkeletonWrapper>

      <ItemPageBottomContentSkeletonWrapper>
        <ItemPageDividerWrapper>
          <Divider />
        </ItemPageDividerWrapper>

        <ItemPageDescriptionSkeletonWrapper>
          <Skeleton width={170} height={35} />

          <Skeleton width={1200} height={120} />
        </ItemPageDescriptionSkeletonWrapper>
      </ItemPageBottomContentSkeletonWrapper>
    </>
  );
};

export default ItemPageContentSkeleton;
