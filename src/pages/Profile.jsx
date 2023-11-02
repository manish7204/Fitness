import React, { useEffect } from "react";
import "./Profile.css";
import { Routes, Route, useNavigate, json } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);
  const navigate = useNavigate();
  const [items, setIteams] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [edit, setEdit] = useState(false);
  const [GoalReach, setGoalReach] = useState(true);

  const item = JSON.parse(localStorage.getItem("AllInputValues"));

  const navigateToLogin = () => {
    navigate("/Login");
  };

  const HandlBtnClick1 = () => {
    setShowDiv1(true);
    setShowDiv2(false);
  };

  const HandlBtnClick2 = () => {
    setShowDiv1(false);
    setShowDiv2(true);
  };

  const inputClick = () => {
    setEdit(false);

    if (GoalReach) {
      const updatedWeight = parseInt(item.weight) + parseInt(inputVal, 10);
      item.weight = updatedWeight; // Update the item's weight
      localStorage.setItem("AllInputValues", JSON.stringify(item)); // Update local storage
    }

    if (parseInt(item.weight) >= parseInt(item.Goal)) {
      setGoalReach(false);
      alert("Your Goal is Reached");
    } else {
      setGoalReach(true);
    }

    console.log(item.Goal + "  " + item.weight);
  };
  const inputVisible = () => {
    setEdit(true);
  };

  const getInputVal = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <>
      <div className={`mian ${!GoalReach ? "celebration" : ""}`}>
        <div className="container">
          <div className="profile-NavBar">
            <button className="Back-btn" onClick={navigateToLogin}>
              🔙
            </button>
            <div className="user">
              <img src="https://previews.123rf.com/images/vitechek/vitechek1907/vitechek190700199/126786791-user-login-or-authenticate-icon-human-person-symbol-vector.jpg?fj=1"></img>
              <p className="userName">{item.name}</p>
            </div>
            <button className="myInfo" onClick={HandlBtnClick1}>
              MyInfo
            </button>
            <button className="mymeal" onClick={HandlBtnClick2}>
              MyMeal
            </button>
            <br />
            <br />
            <br />

            {showDiv1 === true && (
              <>
                <div className="progressDiv">
                  <svg className="progress-circle" width="200" height="130">
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="transparent"
                      strokeWidth="10"
                      stroke="#ccc"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="transparent"
                      strokeWidth="10"
                      stroke="#00ff00"
                      strokeDasharray={`${
                        (item.weight / item.Goal) * 565.48
                      } ${565.48}`}
                      transform={`rotate(20, 100, 100)`}
                    />

                    <text className="textname" fill="#ccc" x="30" y="120">
                      {item.weight}kg
                    </text>
                    <text x="170" y="120" fill="#ccc" textAnchor="end">
                      {item.Goal}kg
                    </text>
                  </svg>
                </div>

                <p className="Line"></p>
                <div className="Addweight">
                  {edit === true && (
                    <>
                      <input
                        className="InputTag"
                        type="Number"
                        value={inputVal}
                        onChange={getInputVal}
                      />
                      <button className="DoneBtn" onClick={inputClick}>
                        Done
                      </button>
                    </>
                  )}
                  {edit === false && (
                    <button className="Addweighth2" onClick={inputVisible}>
                      Add Weight
                    </button>
                  )}
                </div>
                <p className="Line"></p>
                <div className="MyInfoDiv">
                  <div className="goalInfo">
                    <h3>Goals</h3>
                    <br />

                    <h6>Weight</h6>
                    <h6>{item.Goal}</h6>
                    <p>Gain 0.6 Per Week</p>
                  </div>
                </div>
              </>
            )}

            {showDiv2 === true && (
              <div className="myMealDiv">
                <div className="Meal">
                  <h6 className="H6">Morning shake</h6>
                  <p className="Ptag">Protine shake =1 Glass</p>
                  <h3 className="H3">660cal</h3>
                </div>
                <div className="Meal">
                  <h6 className="H6">Morning shake</h6>
                  <p className="Ptag">Protine shake =1 Glass</p>
                  <h3 className="H3">660cal</h3>
                </div>
                <div className="Meal">
                  <h6 className="H6">Morning shake</h6>
                  <p className="Ptag">Protine shake =1 Glass</p>
                  <h3 className="H3">660cal</h3>
                </div>
                <div className="Meal">
                  <h6 className="H6">Morning shake</h6>
                  <p className="Ptag">Protine shake =1 Glass</p>
                  <h3 className="H3">660cal</h3>
                </div>
                <div className="Meal">
                  <h6 className="H6">Morning shake</h6>
                  <p className="Ptag">Protine shake =1 Glass</p>
                  <h3 className="H3">660cal</h3>
                </div>
                <div className="Meal">
                  <h6 className="H6">Morning shake</h6>
                  <p className="Ptag">Protine shake =1 Glass</p>
                  <h3 className="H3">660cal</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
