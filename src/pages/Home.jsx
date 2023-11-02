import React from "react";
import "../home.css";
import FoodCard from "../components/FoodCard";
import { useNavigate } from "react-router-dom";




export default function Home() {
  const navigate = useNavigate();

  const sendtocreate = () => {
  
    navigate("/cpage");
  };
  
  return (
    <>
      <div className="container">
        <div className="NavBar-1">
          <div className="nav-items">
            <div className="profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16 0C7.16129 0 0 7.16129 0 16C0 24.8387 7.16129 32 16 32C24.8387 32 32 24.8387 32 16C32 7.16129 24.8387 0 16 0ZM16 6.19355C19.1355 6.19355 21.6774 8.73548 21.6774 11.871C21.6774 15.0065 19.1355 17.5484 16 17.5484C12.8645 17.5484 10.3226 15.0065 10.3226 11.871C10.3226 8.73548 12.8645 6.19355 16 6.19355ZM16 28.3871C12.2129 28.3871 8.81936 26.671 6.54839 23.9871C7.76129 21.7032 10.1355 20.129 12.9032 20.129C13.0581 20.129 13.2129 20.1548 13.3613 20.2C14.2 20.471 15.0774 20.6452 16 20.6452C16.9226 20.6452 17.8064 20.471 18.6387 20.2C18.7871 20.1548 18.9419 20.129 19.0968 20.129C21.8645 20.129 24.2387 21.7032 25.4516 23.9871C23.1806 26.671 19.7871 28.3871 16 28.3871Z"
                  fill="url(#paint0_linear_9_11)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_9_11"
                    x1="-5.5"
                    y1="17.5"
                    x2="36.5"
                    y2="17.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C45AF6" />
                    <stop offset="1" stop-color="#FF00C7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="logoo">
              <hi>Fitness Pro</hi>
            </div>
          </div>
          <section>
            <p className="today">Today</p>
            <div className="calories-calculator">
              <div className="indigator">
                <h3 className="today">Calories</h3>
                <div class="circle-container">
                  <div class="circle">
                    <div className="circole"></div>
                  </div>
                </div>
              </div>
              <div className="allmeal">
                <FoodCard />
              </div>
            </div>
          </section>
        </div>
        <section className="addedfood">{/* <FoodCard/> */}</section>
        <div className="addIcon">
          <svg
            onClick={sendtocreate}
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height="67"
            viewBox="0 0 67 67"
            fill="none"
          >
            <path
              d="M50.25 36.85H36.85V50.25H30.15V36.85H16.75V30.15H30.15V16.75H36.85V30.15H50.25M33.5 0C29.1007 0 24.7445 0.866503 20.6801 2.55004C16.6157 4.23357 12.9227 6.70116 9.81192 9.81192C3.52945 16.0944 0 24.6152 0 33.5C0 42.3848 3.52945 50.9056 9.81192 57.1881C12.9227 60.2988 16.6157 62.7664 20.6801 64.45C24.7445 66.1335 29.1007 67 33.5 67C42.3848 67 50.9056 63.4705 57.1881 57.1881C63.4705 50.9056 67 42.3848 67 33.5C67 29.1007 66.1335 24.7445 64.45 20.6801C62.7664 16.6157 60.2988 12.9227 57.1881 9.81192C54.0773 6.70116 50.3843 4.23357 46.3199 2.55004C42.2555 0.866503 37.8993 0 33.5 0Z"
              fill="url(#paint0_linear_10_24)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_10_24"
                x1="-13.5"
                y1="41"
                x2="72.5"
                y2="41"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C45AF6" />
                <stop offset="1" stop-color="#FF00C7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}
