import React, { FC, useEffect, useState } from "react";
import PaginationUI from "@mui/material/Pagination";

import { Product } from "models/productModel";

export type ApiResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

type Props = {
  fetchDataCallback: (skip: number, limit: number) => Promise<ApiResponse>;
};

const Pagination: FC<Props> = ({ fetchDataCallback }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response: ApiResponse = await fetchDataCallback(
          (currentPage - 1) * 10,
          10
        );

        setTotalPages(Math.ceil(response.total / 10)); // calculate total pages based on total items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <PaginationUI
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      variant="outlined"
      shape="rounded"
    />
  );
};

export default Pagination;
