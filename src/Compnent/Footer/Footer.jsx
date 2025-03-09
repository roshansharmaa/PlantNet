import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <Footerdiv>
        <div className="one">
          <ul>
            <li>About Us</li>
            <li>Our Plants</li>
            <li>Care Tips</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
          </ul>
          <ul>
            <li>Follow Us</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>

        <div className="two">
          <h5>
            {" "}
            Made with ❤️ By
            <a href="https://github.com/roshansharmaa"> roshansharmaa</a>
          </h5>
        </div>
      </Footerdiv>
    </>
  );
}
const Footerdiv = styled.footer`
  .one {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #242424;
    justify-content: center;

    @media screen and (max-width: 768px) {
      .one {
        display: flex;
        flex-direction: column;
      }
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: flex-start;
      gap: 1rem;
      li {
        list-style: none;
      }
    }
  }
  .two {
    background: #242424;
    h5 {
      margin: 0 2rem;
      
      border-top: 1px solid #37ff69;
      a {
        text-decoration: none;
        color: white;
      }
      text-align: center;
      font-weight: 300;
      letter-spacing: 2px;
    }
  }
`;
export default Footer;
