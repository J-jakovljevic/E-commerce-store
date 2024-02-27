import React, { FC } from "react";
import PaginationUI from "@mui/material/Pagination";
import { PaginationWrapper } from "./Pagination.styled";

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: FC<Props> = ({ totalPages, currentPage, onPageChange }) => {
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
        size="large"
      />
    </PaginationWrapper>
  );
};

export default Pagination;
