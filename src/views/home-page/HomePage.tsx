import React, { FC } from "react";

import Navbar from "../../components/navbar/Navbar";
import { HomePageContainer } from "./HomePage.styled";

const HomePage: FC = () => {
  return (
    <HomePageContainer>
      <Navbar />
    </HomePageContainer>
  );
};

export default HomePage;
