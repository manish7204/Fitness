import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
 
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="/home" element={<Home/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
