import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import { HOME_PAGE_ROUTE } from "./services/routes";
import HomePage from "./views/home-page/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />

          <Route path="*" element={<Navigate to={HOME_PAGE_ROUTE} replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
