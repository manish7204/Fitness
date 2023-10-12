import React from "react";
import { useState } from "react";
import "../App.css";
import "../home.css";



export default function Login()  {

    const [UserData, setUserData] = useState([]);

    return (
      
      <>
      
      
        <div className="main">
          <div className="container">
            <div className="NavBar">
              <hi className="Fitness-Pro">Fitness Pro</hi>
            </div>
            <div className="Allinput">
              <label>
                Full Name:
                <input
                  type="Text"
                  className="name"
                  placeholder="Enter Name Here"
                />
              </label>
  
              <label>
                Height:
                <input
                  type="Text"
                  className="Height"
                  placeholder="Enter Height Here"
                />
              </label>
              <br />
  
              <label>
                Current Weight:
                <input
                  type="text"
                  className="weight"
                  placeholder="Enter Weight Here"
                />
              </label>
              <br />
  
              <label>
                Goal:
                <input
                  type="text"
                  className="Goal"
                  placeholder="Enter Goal Here"
                />
              </label>
              <br />
  
              <button className="submitBtn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
  
  
        
      </>
    );
}

