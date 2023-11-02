import React, { map } from "react";
import "../FoodCard.css";
// import Foods from "./FoodAPI";
// import FoodCard3 from "./FoodCard3";

export default function FoodCard() {
  // const [foodData, setfoodData]= useState(Foods);

  const mealDatas = JSON.parse(localStorage.getItem('newMealData')) || {};
  const mealDataArray = Object.entries(mealDatas);
  console.log(mealDataArray);
  // const totalCalories = mealDataArray.reduce((total, food) => total + food.cal, 0);
  // console.log(totalCalories);

  // console.log(mealDataArray);

  // console.log(foodName);


  return (  
    
      <section>
        {mealDataArray?.map((item, index) => {
          return(
            
            <section key={index}  className="food-container">
                <div  className="food-info">
                  <div className="food-txt">
                    <h3>{item[0]}</h3>
                    <div className="fname">
                    {item[1].map((meal,i)=>{
                      return(
                        <>
                      
                         <p >{meal.fname} </p>
                
                </>
                )
                })}
                
                </div>
                
                </div>
                
                </div>
                <div className="food-cals">
                  <h2 className="allcals">{item[1].reduce((total, food) => total + food.cal, 0)}</h2>
                </div>
              </section>
             )
        })}  

         {/* <FoodCard foodsData={foodData} />  */}
      </section>
   
  );
}
