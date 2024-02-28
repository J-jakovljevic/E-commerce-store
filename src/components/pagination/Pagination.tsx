import React, { FC } from "react";
import PaginationUI from "@mui/material/Pagination";

import { PaginationWrapper } from "./Pagination.styled";
import useMediaQuery from "shared/hooks/useMediaQuery";

type Props = {
  totalPages: number;
  currentPage: number;
  ref: React.RefObject<HTMLDivElement>;
  onPageChange: (page: number) => void;
};

const Pagination: FC<Props> = ({
  totalPages,
  currentPage,
  ref,
  onPageChange,
}) => {
  const breakpoint500 = useMediaQuery("(max-width: 500px)");

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    onPageChange(value);
  };

  return (
    <PaginationWrapper>
      <PaginationUI
        ref={ref}
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        size={breakpoint500 ? "small" : "large"}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
