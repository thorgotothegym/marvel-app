import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { Character } from "./pages/Character";
import { CharacterDetails } from "./pages/CharacterDetails";

import "antd/dist/antd.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Character />} />
          <Route path="/charater-details" element={<CharacterDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
