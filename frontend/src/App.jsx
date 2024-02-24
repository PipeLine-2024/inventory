import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Register } from "./pages/index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/loginform" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
