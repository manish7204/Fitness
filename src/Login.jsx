// import React from "react";
import  { useState } from "react";

 function Login() {
  const [inputsVal, setInputVal] = useState({});

  const allInputVal = () => {
   console.log(inputsVal)
   localStorage.setItem('AllInputValues',JSON.stringify(inputsVal))
  };

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputVal({ ...inputsVal, [name]: value });
  };


  return (
    <>
      <div className="main">
        <div className="container">
          <div className="NavBar">
            <h1 className="Fitness-Pro">Fitness Pro</h1>
          </div>
          <div className="Allinput">
            <label className="label">
              Full Name:
              <input
                type="text"
                className="name"
                name="name"
                placeholder="Enter Name Here"
                value={inputsVal.name || ""}
                onChange={handleChange}
              />
            </label>


            <label className="label">
              Height:
              <input
                type="Number"
                className="Height"
                name="Height"
                placeholder="Enter Height Here"
                value={inputsVal.Height || ""}
                onChange={handleChange}
              />
            </label>
            <br />

            <label className="label">
              Current Weight:
              <input
                type="Number"
                className="weight"
                name="weight"
                placeholder="Enter Weight Here"
                value={inputsVal.weight || ""}
                onChange={handleChange}
              />
            </label>
            <br />

            <label className="label">
              Goal:
              <input
                type="Number"
                className="Goal"
                name="Goal"
                placeholder="Enter Goal Here"
                value={inputsVal.Goal || ""}
                onChange={handleChange}
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
                  name="startDate"
                  placeholder="Enter Goal Here"
                  value={inputsVal.startDate || ""}
                  onChange={handleChange}
                />
              </label>

              <label className="label">
                To:
                <input
                  type="Date"
                  className="ToDate"
                  name="endDate"
                  placeholder="Enter Goal Here"
                  value={inputsVal.endDate || ""}
                  onChange={handleChange}
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


export default Login;
