import React from "react";
import styled from "styled-components";

function Singup() {
  return (
    <>
      <Singuppage>
        <form action=""  onSubmit={(e)=>{e?alert("Successfull"):alert("field requird")}}>
          <div className="title">Sine-Up</div>
          <div className="list">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="" required />
          </div>
          <div className="list">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="" required />
          </div>
          <button>Submit</button>
        </form>
      </Singuppage>
    </>
  );
}

const Singuppage = styled.div`
  height: 100vh;
  justify-content: center;
  display: flex;
  /* justify-content: center; */
  align-items: center;

  form {
    margin: 0 auto;
    background-color: #31b853;
    width: 768px;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 20px;

    gap: 0.5rem;
    .title {
      font-size: 3rem;
    }
    button {
      padding: 0.8rem 2rem  ;
      width: fit-content;

      background-color: #37ff69;
      border: 2px solid black ;
      margin: 0 auto;
      border-radius: 10px;
      &:hover{
        background-color: #31b853;
      }
    }
    .list {
      display: flex;
      flex-direction: column;
      input {
        padding: 1rem;
        font-size: 1rem;
        font-weight: 550;
      }
    }
  }

  @media screen and (max-width: 768px) {
    form {
      .title {
      font-size: 2rem;
    }
    margin: 0 auto;
    background-color: #31b853;
    width: 95%;
    height: 50%;}
  }
`

export default Singup;
