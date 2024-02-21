import React, { FC } from "react";

import { HomePageContainer } from "./HomePage.styled";
import Navbar from "components/navbar/Navbar";

const HomePage: FC = () => {
  return (
    <HomePageContainer>
      <Navbar />
    </HomePageContainer>
  );
};

export default HomePage;
