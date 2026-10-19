import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import About from "./components/About/About";
import Writing from "./components/Writing/Writing";
import Illustration from "./components/Illustration/Illustration";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <main className="page">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/illustration" element={<Illustration />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
