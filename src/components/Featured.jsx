import React from 'react'
import styled from 'styled-components'
import FeaturedData from "../data/featuredData.json";

const Featured = () => {
  return (
    <Container>
      {FeaturedData.map((item) => (
        <FeaturedItem key={item.id}>
          <img src={item.img} alt="featured-img" />
          <div className="featured-titles">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </FeaturedItem>
      ))}
    </Container>
  );
}

export default Featured

const Container = styled.div`
  width: 100%;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  } ;
`;

const FeaturedItem = styled.article`
  position: relative;
  color: white;
  border-radius: 5px;
  overflow: hidden;

  img {
    height: 100%;
  }

  .featured-titles {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
`;
