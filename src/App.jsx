import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import HeaderApp from "./components/HeaderApp";

function App() {
  return (
    <div className="app-container">
      <HeaderApp />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
