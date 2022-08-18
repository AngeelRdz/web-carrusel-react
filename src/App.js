import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Carrusel from "./components/Carrusel/Carrusel";

import Help from "./Pages/Help/Help";
import Admin from "./Pages/Admin/Admin";
import Delete from "./Pages/Delete/Delete";

import './App.scss';

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar />
        </div>
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/help" element={<Help />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/delete" element={<Delete />} />
        </Routes>
    </Router>
  );
}

const Home = () => {

  if (typeof(Storage) !== "undefined") {
      // LocalStorage disponible
  } else {
      // LocalStorage no soportado en este navegador
  }

  return (
      <div className="App">
          <h1 className="text-center mb-3">Home</h1>
          <div className="container">
              <div className="row">
                  <Carrusel />
              </div>
          </div>
      </div>
  );
}

export default App;
