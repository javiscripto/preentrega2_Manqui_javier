import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/NavBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemlistContainer from "./components/itemListContainer";
import Categoria from "./components/pages/categorias";
function App() {
  return (
    <BrowserRouter>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
      </head>
      <Navbar />
      <main>
        <Routes>
          <Route path="/home" element={ <p> home </p> } />

          <Route path="/productos/:nombre" element= { <Categoria/>} /> 
          





        </Routes>

      </main>
    </BrowserRouter>
  );
}

export default App;
