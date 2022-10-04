import React from "react";
import styled from "styled-components";
import { flexCenter } from "../globalFunctions";

const ResultItem = () => {
  return (
    <Container>
      <article>
        <img src="/images/nice-bed.jpg" alt="search-item-img" />
      </article>
      <SearchItemContent>
        <h4 className="title">Tower Street Apartments</h4>
        <span className="distance">500m from center</span>
        <span className="taxi">Free airport taxi</span>
        <span className="subtitle">Studio Apartment with Air Conditioning</span>
        <span className="features">
          Entire studio + 1 bathroom + 21m*2 1 full bed
        </span>
        <span className="cancel">Free cancellation</span>
        <span className="cancel-subtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </SearchItemContent>
      <SearchDetails>
        <div className="rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="detailText">
          <span className="price">$123</span>
          <span className="taxi">Includes tasex and fees</span>
          <button>See Availability</button>
        </div>
      </SearchDetails>
    </Container>
  );
};

export default ResultItem;

const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 5px;
  ${flexCenter("space-between", "", "stretch")};
  margin-bottom: 10px;
  gap: 15px;

  article:nth-child(1) {
    width: 200px;

    img {
      height: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;

    article:nth-child(1) {
      width: 100%;
      height: 300px;
    }
  } ;
`;

const SearchItemContent = styled.article`
  ${flexCenter("", "column", "flex-start")};
  width: 100%;
  gap: 8px;
  flex: 2;

  span {
    font-size: clamp(0.8rem, 0.95vw, 0.95rem);
  }

  .title {
    color: var(--primaryBlue);
  }
  .distance, .features {
    font-size: 0.7rem;
  }
  .taxi, .cancel {
    background-color: #008009;
    color: white;
    padding: 3px;
  }
  .subtitle {
    font-weight: bold;
    font-size: .95rem;
  }
  .cancel-subtitle {
    color: #008009;
  }
`;

const SearchDetails = styled.article`
  flex: 1;
  ${flexCenter("space-between", "column", "flex-start")}
  row-gap: 1rem;

  button {
    background-color: var(--primaryBlue);
    color: var(--white);
    padding: 5px;
    font-weight: bold;
    border: none;
  }

  .rating {
    ${flexCenter("space-between")};
    width: 100%;

    > span {
      font-weight: 500;
    }
  }

  .detailText {
    text-align: right;
    ${flexCenter("", "column", "flex-end")}
    gap: 8px;
    width: 100%;

    .price {
      font-size: clamp(1.1rem, 1.3vw, 1.3rem);
    }
    .taxi {
      font-size: 0.75rem;
      color: var(--textDark);
    }
    button {
      padding: 10px;
    }
  }
`;
