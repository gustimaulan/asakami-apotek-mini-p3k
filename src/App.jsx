import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./layouts/HomePage";

const App = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-sm mx-auto">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={HomePage} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
