import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPageWrapper from "./pages/DetailPage";
import HeaderApp from "./components/HeaderApp";
import AddPage from "./pages/AddPage";

function App() {
  return (
    <div className="app-container">
      <HeaderApp />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPageWrapper />} />
          <Route path="/notes/new" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
