import React from "react";
import styled from "styled-components";
import homeimg from "../../assets/homewall.png";
import Category1 from "../Pages/Category2";

function Home() {

  
  return (
    <>
      <Mainhome>
        <div className="maindiv"></div>
        <div className="content">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            incidunt tempora aperiam odit a, cum aut error sint quae nesciunt.
          </p>
          <button>Explore more</button>
        </div>
      </Mainhome>
      <Secondhome>
        <h1>Trending Plants </h1>
        <Category1 />
      </Secondhome>
    </>
  );
}
const Secondhome = styled.div`
  @media screen and (max-width: 768px) {
    overflow-x: scroll;
    scrollbar-width: 0;
  }
  h1 {
    text-align: center;
    padding: 2rem 0 0;
  }
`;
const Mainhome = styled.div`
  height: 100vh;
  .maindiv {
    background-image: url(${homeimg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    padding: 1rem;
    box-sizing: border-box;
    filter: blur(2px);
  }
  .content {
    height: 100vh;
    top: 17%;
    padding: 1rem;
    background-color: #02020252;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    box-sizing: border-box;
    h1 {
      font-size: 3rem;
      margin: 0;
    }
    p {
      font-size: 1.3rem;
      word-wrap: break-word;
      width: 70%;
    }
    button {
      padding: 0.5rem 1rem;
      background-color: #03c03c;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      box-sizing: border-box;
      &:hover {
        background-color: #0e8e2e;
        box-shadow: 5px 2px 10px #03c03c;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .content p {
      font-size: 1rem;
      width: 90%;
    }
    .content h1 {
      font-size: 2rem;
    }
  }
`;
export default Home;
