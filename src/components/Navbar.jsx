import React from "react";
import styled from "styled-components";
import { flexCenter } from "../globalFunctions";
import { FaTaxi, FaCarAlt, FaPlane, FaHotel } from "react-icons/fa";
import { MdHotel } from "react-icons/md";

const Navbar = () => {
  return (
    <Nav>
      <Top>
        <span className="logo">Vickonary</span>
        <NavItems>
          <button>Register</button>
          <button>Login</button>
        </NavItems>
      </Top>
      <Bottom>
        <article className="active">
          <MdHotel />
          <span>Stays</span>
        </article>
        <article>
          <FaPlane />
          <span>Flights</span>
        </article>
        <article>
          <FaCarAlt />
          <span>Car Rentals</span>
        </article>
        <article>
          <FaHotel />
          <span>Attractions</span>
        </article>
        <article>
          <FaTaxi />
          <span>Airport taxis</span>
        </article>
      </Bottom>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  ${flexCenter("flex-start", "column", "flex-start")};
  gap: 10px;
  padding: 1rem 0;
`;

const Top = styled.div`
  ${flexCenter("space-between")};
  gap: 20px;
  width: 100%;

  .logo {
    font-weight: 500;
    font-size: clamp(1.1rem, 1.5vw, 1.5rem);
  }

  @media screen and (max-width : 425px) {
    flex-wrap: wrap;
    margin: 1rem 0;
  };
`;

const Bottom = styled.div`
  ${flexCenter()};
  gap: 10px 25px;
  flex-wrap: wrap;

  > article {
    ${flexCenter()};
    gap: 10px;
    padding: 8px;
    border-radius: 10px;
    flex: 1;
    white-space: nowrap;

    &.active {
      border: 1px solid var(--white);
    }
  }
`;

const NavItems = styled.div`
  ${flexCenter()};
  gap: 20px;

  button {
    padding: 7px 10px;
    color: var(--primaryBlue);
    font-size: 1rem;
  }
`;
