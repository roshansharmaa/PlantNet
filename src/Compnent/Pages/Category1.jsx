import React, { useContext } from "react";
import { Link } from "react-router-dom";


import finaldata from '../Context/Api';
import Card from "../Card/Card";
import styled from "styled-components";
import { firstContext } from "../Context/Usercontext";

function Category1() {
  let { data, setaddt, addt, setdata } = useContext(firstContext);
  return (
    <>
      <Cartdiv>
        {finaldata.firstarr.map((e, i) => (
          <Card
            key={i}
            imgp={e.photo}
            name={e.name}
            owner={e.owner}
            price={e.price}
          />
        ))}

        {addt ? (
          <Card
            key={data.id}
            imgp={"https://static.thenounproject.com/png/4595376-200.png"}
            name={data.name}
            owner={data.owner}
            price={data.price}
          />
        ) : (
          <></>
        )}
      </Cartdiv>
    </>
  );
}

let Cartdiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100vh;
  padding: 1.5rem 0;
  gap: 1rem;
  justify-content: space-evenly;
  @media screen  and (max-width: 1024px){
    grid-template-columns: repeat(3, 1fr);
    
  }
  @media screen  and (max-width: 768px){
    grid-template-columns: repeat(2, 1fr);

  }
  overflow-x: scroll;
  scrollbar-width: none; 


`;
export default Category1;
