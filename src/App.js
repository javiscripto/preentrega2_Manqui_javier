import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/NavBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemlistContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemdetailContainer";


function App() {
  return (
    <BrowserRouter>
     
      <Navbar />
      <main>
        <Routes>
          <Route path="/home" element={ <p> home </p> } />

          <Route path="/productos/:nombre" element= { <ItemlistContainer/>} /> 
          <Route path="/product/detail" element={<ItemDetailContainer/>} />
          





        </Routes>

      </main>
    </BrowserRouter>
  );
}

export default App;
