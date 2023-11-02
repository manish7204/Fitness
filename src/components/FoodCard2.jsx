import React, { useEffect, useState } from "react";
import "../FoodCard.css";
// import Foods from "./FoodAPI";
// import Search from "./SearchBar";
// import Data from "./DBconnection";
// import FoodCard3 from "./FoodCard3";
 

export default function FoodCard2({ Name, cal, items, setItems }) {
  const addedAlready = items.filter((item) => item.fname === Name).length > 0;

  const addData = () => {
    setItems((prevItems) => {
      const item = {
        fname: Name,
        cal: cal,
      };
      const newItems = [...prevItems, item];
      return newItems;
    });
  };

  const removeData = () => {
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.fname !== Name);

      return newItems;
    });
  };

  

  return (
    <>
      <section className="food-container">
        <div className="food-info">
          <div className="food-txt">
            <h3>{Name}</h3>
            <p>{cal}</p>
          </div>
        </div>
        <div className="food-cal">
          {!addedAlready ? (
            <svg
              id="add-card"
              onClick={addData}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
            >
              <path
                d="M20.25 14.85H14.85V20.25H12.15V14.85H6.75V12.15H12.15V6.75H14.85V12.15H20.25M13.5 0C11.7272 0 9.97167 0.349188 8.33377 1.02763C6.69588 1.70606 5.20765 2.70047 3.95406 3.95406C1.42232 6.4858 0 9.91958 0 13.5C0 17.0804 1.42232 20.5142 3.95406 23.0459C5.20765 24.2995 6.69588 25.2939 8.33377 25.9724C9.97167 26.6508 11.7272 27 13.5 27C17.0804 27 20.5142 25.5777 23.0459 23.0459C25.5777 20.5142 27 17.0804 27 13.5C27 11.7272 26.6508 9.97167 25.9724 8.33377C25.2939 6.69588 24.2995 5.20765 23.0459 3.95406C21.7924 2.70047 20.3041 1.70606 18.6662 1.02763C17.0283 0.349188 15.2728 0 13.5 0Z"
                fill="url(#paint0_linear_10_128)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_10_128"
                  x1="-5.4403"
                  y1="16.5224"
                  x2="29.2164"
                  y2="16.5224"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C45AF6" />
                  <stop offset="1" stop-color="#FF00C7" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            <svg
              id="add-card"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              onClick={removeData}
            >
              <path
                d="M17.9282 13L25.3197 5.60847C26.2268 4.70142 26.2268 3.2308 25.3197 2.32301L23.677 0.680284C22.7699 -0.226761 21.2993 -0.226761 20.3915 0.680284L13 8.07182L5.60847 0.680284C4.70142 -0.226761 3.2308 -0.226761 2.32301 0.680284L0.680284 2.32301C-0.226761 3.23006 -0.226761 4.70068 0.680284 5.60847L8.07182 13L0.680284 20.3915C-0.226761 21.2986 -0.226761 22.7692 0.680284 23.677L2.32301 25.3197C3.23006 26.2268 4.70142 26.2268 5.60847 25.3197L13 17.9282L20.3915 25.3197C21.2986 26.2268 22.7699 26.2268 23.677 25.3197L25.3197 23.677C26.2268 22.7699 26.2268 21.2993 25.3197 20.3915L17.9282 13Z"
                fill="#FF0000"
              />
            </svg>
          )}
        </div>
      </section>
      <br></br>

      {/* <FoodCard3 Item={items}></FoodCard3> */}
    </>
  );
}

// return(
//     <>

//     </>
// )


// {
//   "breskfsdt0" : [{if}]
// }
