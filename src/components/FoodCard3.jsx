// import React, { useState } from "react";
// import "../FoodCard.css";
// // import Foods from "./FoodAPI";

// export default function FoodCard3({ Item }) {
//   console.log(Item);

//   return (
//     <>
//       <section>
//         {Item.map((data) => {
//           return (
//             <>
//               <section className="food-container">
//                 <div className="food-info">
//                   <div className="food-txt">
//                     <h3>{data.name}</h3>
//                     <p>{data.cal}</p>
//                   </div>
//                 </div>
//                 <div className="food-cal">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="26"
//                     height="26"
//                     viewBox="0 0 26 26"
//                     fill="none"
//                   >
//                     <path
//                       d="M17.9282 13L25.3197 5.60847C26.2268 4.70142 26.2268 3.2308 25.3197 2.32301L23.677 0.680284C22.7699 -0.226761 21.2993 -0.226761 20.3915 0.680284L13 8.07182L5.60847 0.680284C4.70142 -0.226761 3.2308 -0.226761 2.32301 0.680284L0.680284 2.32301C-0.226761 3.23006 -0.226761 4.70068 0.680284 5.60847L8.07182 13L0.680284 20.3915C-0.226761 21.2986 -0.226761 22.7692 0.680284 23.677L2.32301 25.3197C3.23006 26.2268 4.70142 26.2268 5.60847 25.3197L13 17.9282L20.3915 25.3197C21.2986 26.2268 22.7699 26.2268 23.677 25.3197L25.3197 23.677C26.2268 22.7699 26.2268 21.2993 25.3197 20.3915L17.9282 13Z"
//                       fill="#FF0000"
//                     />
//                   </svg>
//                 </div>
//               </section>
//               <br></br>
//             </>
//           );
//         })}
//       </section>
//     </>
//   );
// }