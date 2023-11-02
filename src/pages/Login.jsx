import { useState } from "react";

export function Login() {

  const[inputsVal,setInputVal]=useState({});

  const allInputVal =() =>{

  }
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="NavBar">
          
          <div>
          <h1 className="Fitness-Pro">Fitness Pro</h1>

          </div>
          </div>
          <div className="Allinput">
            <label className="label">
              Full Name:
              <input
                type="Text"
                className="name"
                placeholder="Enter Name Here"
              />
            </label>

            <label className="label">
              Height:
              <input
                type="Text"
                className="Height"
                placeholder="Enter Height Here"
              />
            </label>
            <br />

            <label className="label">
              Current Weight:
              <input
                type="text"
                className="weight"
                placeholder="Enter Weight Here"
              />
            </label>
            <br />

            <label className="label">
              Goal:
              <input
                type="text"
                className="Goal"
                placeholder="Enter Goal Here"
              />
            </label>
            <br />

            <div className="DateInput">

            <label className="label">
              Duration
              <br></br> From:
              <input
                type="Date"
                className="FromDate"
                placeholder="Enter Goal Here"
              />
            </label>

            <label className="label">
              To:
              <input
                type="Date"
                className="ToDate"
                placeholder="Enter Goal Here"
              />
            </label>

            </div>
            <button className="submitBtn" type="submit" onClick={allInputVal}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
