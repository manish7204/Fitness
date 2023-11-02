import React, { useState } from "react";

import Search from "../components/SearchBar";
import "../search.css";
// import items from "../components/FoodCard2";
import FoodCard from "../components/FoodCard";
import { useNavigate } from "react-router-dom";

export default function CreatePage({ items, setItems, mealArray, setMealArray }) {
  // const foodArray = items;
  // console.log(foodArray);

  const [mealName, setMealName] = useState("");
  // const [mealsArrays, setMealsArrays] = useState([]);

  // const [mealArray, setMealArray] = useState([]);

  const navigate = useNavigate()

  
  console.log(items);

  const back=()=>{
    navigate("/home");
  }

  const createMeal = () => {
    
    // const sendData= (items) =>{
    //   return(
    //     <FoodCard fItems={items} />
    //   )
    // }
    setItems((prevItems) => {
      // const mealArray={
      //   allName:foodName,
      //   tcal:totalCalories,
      //   mName:mealName,
      // };
      
      const newItems = {...prevItems, [mealName] : mealArray}
      localStorage.setItem('newMealData', JSON.stringify(newItems));
      return newItems      
    });

    // console.log(foodName);
    // console.log(totalCalories);

    // localStorage.setItem('fullMealData', JSON.stringify(items));

{/* <FoodCard fullMealData={fullMealData}/> */}

    

    navigate("/home")

        // setMealsArrays(prevItems =>{

    //   const mealsArrays = {
    //     mealName: mealName,
    //     foodName:foodName,
    //     foodCal:totalCalories,
    //   };

    //   const newItems ={...prevItems, mealsArrays}
    // })


   
    // console.log(items);


   


  
    // setMealArray([mealArray, mealName]);
    // const mealsArray=mealArray;
    
    // mealArray.push(foodArray);

    // const topArray = [ ...mealArray];
    // console.log(topArray);

    // <FoodCard fullArray={topArray}/>

  };


  console.log(items);


  return (
    <>
    
      <section className="container">
        <div>
          <nav>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              onClick={back}
            >
              <path
                d="M14.9454 23.644L13.6572 24.9323C13.1117 25.4777 12.2297 25.4777 11.69 24.9323L0.409106 13.6572C-0.136369 13.1117 -0.136369 12.2297 0.409106 11.69L11.69 0.409106C12.2355 -0.136369 13.1175 -0.136369 13.6572 0.409106L14.9454 1.69736C15.4967 2.24863 15.4851 3.14809 14.9222 3.68776L7.9297 10.3495H24.6073C25.3791 10.3495 26 10.9704 26 11.7422V13.5992C26 14.3709 25.3791 14.9919 24.6073 14.9919H7.9297L14.9222 21.6536C15.4909 22.1933 15.5025 23.0927 14.9454 23.644Z"
                fill="white"
              />
            </svg>
            <h2>Add Food</h2>
          </nav>

          <div className="meal-input">
            <h3>Meal Name</h3>
            <input
              id="meal-name"
              value={mealName}
              placeholder="Type Name Here"
              onChange={(event) => setMealName(event.target.value)}
            ></input>
          </div>

          <div className="search-section">
            <Search items={mealArray} setItems={setMealArray} />
          </div>
          <br></br>

          <div className="createBtn">
            <button id="create-btn" onClick={createMeal}>
              Create
            </button>
            <FoodCard item={items}/>
          </div>
        </div>
      </section>
    </>
  );
}

