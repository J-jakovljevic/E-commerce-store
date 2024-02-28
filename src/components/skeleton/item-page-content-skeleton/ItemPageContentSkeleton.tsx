import React, { FC } from "react";
import { Divider, Skeleton } from "@mui/material";

import {
  ItemPageBottomContentSkeletonWrapper,
  ItemPageContentResponsiveSkeletonWrapper,
  ItemPageDescriptionSkeletonWrapper,
  ItemPageHeaderSkeletonWrapper,
  ItemPageTopContentSkeletonWrapper,
  ItemPageTopContentTextSkeletonWrapper,
  ThumbnaiSkeletonlWrapper,
} from "./ItemPageContentSkeleton.styled";
import { ItemPageDividerWrapper } from "utils/layout";
import useMediaQuery from "shared/hooks/useMediaQuery";

const ItemPageContentSkeleton: FC = () => {
  const breakpoint1196 = useMediaQuery("(max-width: 1196px)");
  const breakpoint892 = useMediaQuery("(max-width: 892px)");

  return (
    <ItemPageContentResponsiveSkeletonWrapper>
      <ItemPageTopContentSkeletonWrapper>
        <ThumbnaiSkeletonlWrapper>
          <Skeleton
            width={breakpoint1196 ? (breakpoint892 ? "100%" : 400) : 520}
            height={250}
            style={{ borderRadius: "1.3rem" }}
          />
        </ThumbnaiSkeletonlWrapper>

        <ItemPageTopContentTextSkeletonWrapper>
          <ItemPageHeaderSkeletonWrapper>
            <Skeleton width={270} height={50} />

            <Skeleton width={200} height={40} />

            <Skeleton width={170} height={25} />

            <Skeleton width={70} height={30} />

            <Skeleton width={breakpoint1196 ? 270 : 450} height={90} />
          </ItemPageHeaderSkeletonWrapper>
        </ItemPageTopContentTextSkeletonWrapper>
      </ItemPageTopContentSkeletonWrapper>

      <ItemPageBottomContentSkeletonWrapper>
        <ItemPageDividerWrapper>
          <Divider />
        </ItemPageDividerWrapper>

        <ItemPageDescriptionSkeletonWrapper>
          <Skeleton width={170} height={35} />

          <Skeleton width={breakpoint1196 ? "100%" : 1000} height={120} />
        </ItemPageDescriptionSkeletonWrapper>
      </ItemPageBottomContentSkeletonWrapper>
    </ItemPageContentResponsiveSkeletonWrapper>
  );
};

export default ItemPageContentSkeleton;
