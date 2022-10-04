import React from 'react'
import styled from 'styled-components'
import { flexCenter } from '../globalFunctions';

const Footer = () => {
  return (
    <Container>
      <Lists>
        <List>
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
        </List>
        <List>
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
        </List>
        <List>
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
        </List>
        <List>
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
        </List>
        <List>
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
        </List>
      </Lists>
      <div className="copyright">Copyright &#169; 2022 | Vickonary</div>
    </Container>
  );
}

export default Footer

const Container = styled.footer`
  width: min(100%, 1150px);
  font-size: clamp(.8rem, .95vw, .95rem);
  margin: 0 auto;
  padding: 0 20px;

  .copyright {
    font-size: 1rem;
    color: var(--textDark);
    margin-bottom: 2rem;
    text-align: center;
  }
`

const Lists = styled.div`
  width: 100%;
  ${flexCenter("space-between")};
  margin: 20px 0 50px;
  flex-wrap: wrap;
  row-gap: 2rem;
`

const List = styled.ul`
  ${flexCenter("", "column")};
  gap: 0.6rem;
  color: var(--primaryBlue);

  li {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    width: 33%;
  }

  @media screen and (max-width: 425px) {
    width: 50%;
  } ;
`;
