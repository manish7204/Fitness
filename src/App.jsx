import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from "./pages/home";
import {Login} from "./pages/login";
import Home from "./pages/Home";
// import Food from "./components/FoodAPI";
import "./App.css"
import FoodCard from "./components/FoodCard";
// import FoodCard2 from "./components/FoodCard2";
// import FoodCard3 from "./components/FoodCard3";
import Search from "./components/SearchBar";
import SearchPage from "./pages/Search";
import CreatePage from "./pages/Create";

// import FoodCard1 from "./components/FoodCard";

function App() {
  const [items, setItems] = useState({});
  const [mealArray, setMealArray] = useState([]);




  // const updatedArray = newItems;

  // console.log(items);
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="/home" element={<Home items={items} />} />
        <Route path="/spage" element={<SearchPage items={items} setItems={setItems} />} />
        <Route path="/cpage" element={<CreatePage items={items} setItems={setItems} mealArray={mealArray} setMealArray={setMealArray}  />} />
        {/* <Route path="/Search" element={<FoodCard/>} /> */}

        {/* <Route path="/food2" element={<FoodCard2 items={items} setItems={setItems} />} /> */}
        {/* <Route path="/food3" element={<FoodCard3 />} /> */}
        <Route path="/Search" element={<Search/>} />
        <Route path="/food" element={<FoodCard  items={items} setItems={setItems} mealArray={mealArray} setMealArray={setMealArray} />} />


        {/* <Route path="/spage" element={<SearchPage/>} /> */}


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
