import { useState } from "react";
import React from "react";
import FoodCard2 from "./FoodCard2";
import "../search-bar.css";
import Foods from "./FoodAPI";
// import {FaSearch} from "/react-icons/fa"

export default function Search({items, setItems}){
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };

            // console.log(searchTerm);  
      

      const filteredFood = Foods.filter((curElem) =>
      curElem.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // {filteredFood.length > 0 && searchTerm !== '' && (
  //   <FoodCard2 foodss={filteredFood} />
  // )}

  // {searchTerm !== '' && (
  //   filteredFood.length > 0 ? (
  //     <FoodCard2 foods={filteredFood} />
  //   ) : (
  //     <p>No results found</p>
  //   )
  // )}


    return(
        
        <>
        {/* <Search setsearch={setsearch} /> */}
        <div>
        <form className="search-input">
        <svg id="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8.00492 2.00008C6.41264 2.00008 4.88558 2.63261 3.75967 3.75852C2.63376 4.88443 2.00123 6.4115 2.00123 8.00377C2.00123 9.59605 2.63376 11.1231 3.75967 12.249C4.88558 13.3749 6.41264 14.0075 8.00492 14.0075C9.5972 14.0075 11.1243 13.3749 12.2502 12.249C13.3761 11.1231 14.0086 9.59605 14.0086 8.00377C14.0086 6.4115 13.3761 4.88443 12.2502 3.75852C11.1243 2.63261 9.5972 2.00008 8.00492 2.00008ZM4.94466e-08 8.00377C0.000182438 6.72985 0.304405 5.47437 0.887385 4.34167C1.47036 3.20896 2.31526 2.23176 3.35186 1.49126C4.38846 0.750758 5.58683 0.268354 6.84736 0.0841379C8.10789 -0.100078 9.39419 0.0192126 10.5993 0.432097C11.8045 0.844982 12.8937 1.53953 13.7765 2.45803C14.6592 3.37653 15.31 4.49245 15.6747 5.71304C16.0395 6.93364 16.1076 8.22365 15.8735 9.47588C15.6394 10.7281 15.1099 11.9064 14.3288 12.9128L19.7191 18.3031C19.9014 18.4918 20.0022 18.7446 20 19.0069C19.9977 19.2693 19.8924 19.5203 19.7069 19.7058C19.5214 19.8913 19.2704 19.9965 19.0081 19.9988C18.7457 20.0011 18.493 19.9002 18.3042 19.718L12.9139 14.3277C11.7307 15.2463 10.3134 15.8145 8.82319 15.9676C7.33301 16.1208 5.82977 15.8527 4.4844 15.1939C3.13903 14.535 2.00552 13.5119 1.21277 12.2409C0.420017 10.9698 -0.000166423 9.50179 4.94466e-08 8.00377Z" fill="#858282"/>
        </svg>
        <input  
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a food">
         </input>
        </form>
        <br></br>
        
        
        {filteredFood.length > 0 && searchTerm !== '' && (
        filteredFood.map((curElem) => <FoodCard2 key={curElem.Name} {...curElem} items={items} setItems={setItems} />)
      )}

      
      </div>
        {/* <div><FoodCard2/></div> */}







{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}




        

        </>
    )
}