import React from "react";
import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";
function Card({imgp,name,owner,price}) {
  return (
    <>
      <Cardcomp>
        <div className="crd">
          <img src={imgp} alt="plant" />
          <h4>{name}</h4>
          <p>{owner}</p>
          <h4>{price}₹</h4>
          <div className="btns">
            <button className="one">Buy now</button>
            <button className="two">
              <FaCartPlus />
            </button>
          </div>
        </div>
      </Cardcomp>
    </>
  );
}
const Cardcomp = styled.div`
  z-index: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  .crd {
    background-color: #03c03c;
    height: 330px;
    width: 200px;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 10px;
    img {
      width: 100%;
      background-color: #ffdead;
      border-radius: 10px;
      aspect-ratio: 2/2.2 ;
    }
    h5,
    h4,
    p {
      margin: 0;
      color: black;
    }
    .btns {
      display: flex;
      flex-direction: row;
      /* gap: 1rem; */
      justify-content: space-between;
      margin-top: 0.5rem;
      .one,
      .two {
        width: 120px;
        background-color: #0e8e2e;
        justify-content: space-between;
        border: none;
        outline: none;
        padding: 0.3rem 0rem;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 5px;
        font-weight: 700;
        color: white;
        &:hover {
          box-shadow: 5px 2px 20px black;
        }
      }
      .two {
        width: 50px;
      }
    }
    @media screen and (max-width: 768px) {
      .crd {
        background-color: #1c1c1c;
        height: auto;
        width: 10px;
        padding: 5px;
        color: red;
      }
    }
  }
  .crd h4{
    color: white;
  }
  @media screen  and (max-width: 500px){
    .crd {
    background-color: #03c03c;
    height: 270px;
    width: 150px;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 10px;}
  }
`;
export default Card;
