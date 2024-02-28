import React, { FC } from "react";
import { Outlet } from "react-router-dom";

import { HomePageLayoutContainer } from "./HomePageLayout.styled";

const HomePageLayout: FC = () => {
  return (
    <HomePageLayoutContainer>
      <Outlet />
    </HomePageLayoutContainer>
  );
};

export default HomePageLayout;
