import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import styled from "styled-components";
import { firstContext } from "../Context/Usercontext";
import finaldata from '../Context/Api';

function Category1() {
  console.log(finaldata.secondarr);
  let { data, setaddt, addt, setdata } = useContext(firstContext);
  return (
    <>
      <Cartdiv>
        {finaldata.secondarr.map((e, i) => (
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
  /* flex-wrap: wrap; */
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

`;
export default Category1;
