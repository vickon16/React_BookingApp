import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <Main>
      <HeaderContainer>
        <Navbar />
      </HeaderContainer>
      <Outlet />
    </Main>
  );
}

export default Layout;

const Main = styled.div`
  nav {
    width: min(100%, 1150px);
    margin: 0 auto;
  }
`;

const HeaderContainer = styled.section`
  background-color: var(--primaryBlue);
  color: var(--white);
  padding: 0 20px;
`;
