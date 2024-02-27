import React, { FC } from "react";
import PaginationUI from "@mui/material/Pagination";
import { PaginationWrapper } from "./Pagination.styled";
import useMediaQuery from "shared/hooks/useMediaQuery";

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: FC<Props> = ({ totalPages, currentPage, onPageChange }) => {
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
