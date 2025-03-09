import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { firstContext } from "../Context/Usercontext";

function Add() {
  let { data, setaddt, addt, setdata } = useContext(firstContext);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Singuppage>
        <Link to={"/add"}>
          <form action="">
            <div className="title">Add Plants</div>
            <div className="list">
              <label htmlFor="">Plant Name</label>
              <input
                type="text"
                placeholder=""
                required
                onChange={(e) => {
                  setdata((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="list">
              <label htmlFor="">Description</label>
              <textarea
                name=""
                rows={4}
                id=""
                onChange={(e) => {
                  setdata((prev) => ({
                    ...prev,
                    dec: e.target.value,
                  }));
                }}
              ></textarea>
            </div>
            <div className="list">
              <label htmlFor="">Photos</label>
              <div className=" xlist">
                <input
                  type="file"
                  onClick={(e) => {
                    setdata((prev) => ({
                      ...prev,
                      photo: 'https://static.thenounproject.com/png/4595376-200.png',
                    }));
                  }}
                  style={{ display: "block" }}
                />
              </div>
            </div>
            <div className="list">
              <label htmlFor="">Owner Name</label>
              <input
                type="text"
                placeholder=""
                required
                onChange={(e) => {
                  setdata((prev) => ({ ...prev, owner: e.target.value }));
                }}
              />
            </div>
            <div className="list">
              <label htmlFor="">Price</label>
              <input
                type="number"
                placeholder=""
                required
                onChange={(e) => {
                  setdata((prev) => ({ ...prev, price: e.target.value }));
                }}
              />
            </div>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if (e.target.checkValidity()) {
                  alert("Successful submission");
                } else {
                  alert("Please fill all required fields");
                }
                setaddt(true);
              }}
            >
              Submit
            </button>
          </form>
        </Link>
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
  a {
    text-decoration: none;
    color: black;
  }
  form {
    margin: 0 auto;
    background-color: #31b853;
    width: 768px;
    height: 70%;
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
      padding: 0.8rem 2rem;
      width: fit-content;

      background-color: #37ff69;
      border: 2px solid black;
      margin: 0 auto;
      border-radius: 10px;
      &:hover {
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
        outline: none;
      }
    }

    .xlist {
      border: 2px solid black;
      input[type="file"] {
        display: block;
        cursor: pointer;
        opacity: 1;
        position: static;
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
      height: 70%;
    }
  }
`;

export default Add;
