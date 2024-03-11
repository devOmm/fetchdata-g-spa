import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import ListPage from "./ListPage";
import './index.css'

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard favorites={favorites} setFavorites={setFavorites} />}
        />
        <Route
          path="/list"
          element={<ListPage favorites={favorites} setFavorites={setFavorites} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
