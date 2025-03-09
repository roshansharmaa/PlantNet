import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { PiPlantBold } from "react-icons/pi";
import { FaPlantWilt } from "react-icons/fa6";
import { GiPlantRoots } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { PiPottedPlantDuotone } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";
import { RiLoginBoxFill } from "react-icons/ri";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { CgEditContrast } from "react-icons/cg";
function Navbar() {
  let [dropdown, setdropdown] = useState(false);
  let [theme, settheme] = useState(false);

  document.body.style.colorScheme = theme ? "light" : "dark";
  console.log(theme, "dsldfjl");
  return (
    <>
      <Navcomp>
        {dropdown ? (
          <div className="dropdown">
            <Link to={"/singup"}>
              <button className="item" onClick={(p) => setdropdown(!p)}>
                <RiLoginBoxFill /> <p>Login</p>
              </button>
            </Link>
            <Link to={"/singin"}>
              <button className="item" onClick={() => setdropdown(!dropdown)}>
                <RiLogoutBoxRFill /> <p>Logout</p>
              </button>
            </Link>
            <Link to={"add"}>
              <button className="item" onClick={() => setdropdown(!dropdown)}>
                <FaCirclePlus /> <p>Add item</p>
              </button>
            </Link>
            <button
              className="item"
              onClick={() => {
                setdropdown(!dropdown);
                settheme(!theme);
              }}
            >
              <CgEditContrast /> <p>Theme</p>
            </button>
          </div>
        ) : (
          <></>
        )}
        <div className="firstnav">
          <Link to={"/"}>
            <div className="one">
              <img src={logo} className="imgg" alt="" />
              <h1>PlantNet</h1>
            </div>
          </Link>
          <div className="two">
            <input type="text" placeholder="Serch" name="" id="" />
            <PiMagnifyingGlassDuotone />
          </div>
          <button className="three" onClick={() => setdropdown(!dropdown)}>
            <FaBars />
            <FaUserCircle />
          </button>
        </div>
        <div className="secondnav">
          <NavLink to={"/Houseplants"}>
            <button className="first">
              <PiPlantBold />
              <h5>Houseplants</h5>
            </button>
          </NavLink>
          <NavLink to={"/PlantCare"}>
            <button className="first">
              <FaPlantWilt />
              <h5>Plant Care</h5>
            </button>
          </NavLink>
          <NavLink to={"/Houseplants"}>
            <button className="first">
              <GiPlantRoots />
              <h5>Gardening Tips</h5>
            </button>
          </NavLink>{" "}
          <NavLink to={"/PlantCare"}>
            <button className="first">
              <RiPlantFill />
              <h5>Indoor Plants</h5>
            </button>
          </NavLink>{" "}
          <NavLink to={"/Houseplants"}>
            <button className="first">
              <GiPlantsAndAnimals />
              <h5>Eco-Friendly</h5>
            </button>
          </NavLink>{" "}
          <NavLink to={"/PlantCare"}>
            <button className="first">
              <PiPottedPlantDuotone />
              <h5>Outdoor Plants</h5>
            </button>
          </NavLink>
        </div>
      </Navcomp>
    </>
  );
}
const Navcomp = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  width: 100%;
  overflow: hidden;
  .dropdown {
    position: absolute;
    border-radius: 20px;
    top: 50px; /* Adjusted for better positioning */
    right: 2%;
    background-color: #31b853;
    padding: 1rem;
    box-sizing: border-box;
    width: 150px;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    z-index: 11;
    .item {
      box-sizing: border-box;
      border-radius: 5px;
      padding: 0 0.5rem;
      display: flex;
      justify-content: left;
      gap: 1rem;
      color: black;
      font-weight: 700;
      align-items: center;
      border: none;
      background-color: #37ff69;
      svg {
        font-size: 1.3rem;
        cursor: pointer;
      }
      &:hover {
        color: white;
        box-shadow: 5px 10px 80px black;
      }
    }
    &:hover {
      box-shadow: 5px 10px 30px black;
    }
  }
  .firstnav {
    background-color: #37ff69;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    border-bottom: 2px solid #000;
    width: 100%;
    padding: 0.5rem 1rem;
    min-height: 50px; /* Increased height for better spacing */
    align-items: center;
    .imgg {
      width: 2rem;
    }
  }
  .one,
  .two,
  .three {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .one h1 {
    color: #000000;
    &:hover {
      transition: all 0.3s ease;
      color: white;
    }
  }
  .two {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    input {
      padding: 0.5rem 0.7rem;
      border-radius: 1rem;
      border: none;
      width: 100%;
      max-width: 200px; /* Fixed min-width issue */
      font-weight: 600;
      outline: none;
    }
    svg {
      font-size: 1.5rem;
      font-weight: 700;
      padding: 0.2rem 0.4rem;
      cursor: pointer;
      border-radius: 50%;
      color: #010101;
      background-color: #31b853;
      &:hover {
        transition: all 0.3s ease;
        color: white;
      }
    }
  }
  .three {
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 20px;
    border: 1px solid black;
    padding: 0.3rem 0.8rem; /* Adjusted padding */
    svg {
      font-size: 1.3rem;
      padding: 0.3rem;
      border-radius: 5px;
      cursor: pointer;
      color: #000;
      &:hover {
        transition: all 0.4s ease;
        background-color: #31b853;
        color: white;
      }
    }
    &:hover {
      transition: all 0.1s;
      box-shadow: 10px 10px 30px black;
    }
  }
  .secondnav {
    width: 100%;
    max-width: 710px;
    height: 8vh;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start; /* Ensures proper alignment */
    flex-wrap: nowrap;
    overflow-x: auto; /* Improved cross-browser scrolling */
    background-color: #37ff69;
    padding: 0.2rem 1rem;
    box-sizing: border-box;
    border-radius: 0px 0px 30px 30px;
    .first {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      min-width: 100px;
      color: black;
      &:hover {
        color: white;
      }
      padding: 0.3rem;
      border: none;
      cursor: pointer;
      border-radius: 10px;
      h5 {
        word-wrap: normal;
      }
      svg {
        font-size: 1.3rem;
      }
    }
  }
  .secondnav::-webkit-scrollbar {
    display: none;
  }

  .dropdown a {
    text-decoration: none;
  }
  .dropdown a button {
    width: 100%;
  }
  .secondnav {
    text-decoration: none;
    a {
      text-decoration: none;
    }
    .active {
      text-decoration: none;
    }
  }

  .active {
    /* &:hover { */
    transition: all 0.3s ease;
    background-color: #31b853;
    /* background: rgb(76, 187, 23); */
    border-bottom: 2px solid black;
    border-radius: 10px;
    background: linear-gradient(
      360deg,
      #1db954 35%,
      rgba(0, 212, 255, 0.020133053221288555) 100%
    );
    color: white;
  }

  .firstnav a {
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    .secondnav {
      width: 90%;
      flex-shrink: 0;
      .active {
        flex-shrink: 0;
      }
      .active .first {
        min-width: 80px;
        svg {
          font-size: 1rem;
        }
      }
    }
    .firstnav .one h1 {
      display: none;
    }
  }
`;
export default Navbar;
