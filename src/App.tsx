import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import { HOME_PAGE_ROUTE, ITEM } from "services/routes";
import HomePage from "views/home-page/HomePage";
import ItemPage from "views/item-page/ItemPage";
import HomePageLayout from "components/layout/home-page-layout/HomePageLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={HOME_PAGE_ROUTE} element={<HomePageLayout />}>
            <Route index element={<HomePage />} />

            <Route path={ITEM()} element={<ItemPage />} />
          </Route>

          <Route path="*" element={<Navigate to={HOME_PAGE_ROUTE} replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
