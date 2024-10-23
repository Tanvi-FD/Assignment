import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Update from "./Components/Update";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/Create" element={<Create />}>
            create
          </Route>
          <Route path="/edit/:id" element={<Update />}>
            update
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
