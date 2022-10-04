import React from "react";
import styled from "styled-components";
import { flexCenter } from "../globalFunctions";

const Option = ({title, options, handleOption}) => {
  return (
    <OptionItem className="options-item" key={title}>
      <span className="item-text">{title}</span>
      <span className="item-func">
        <button
          disabled={options[title] <= 1}
          onClick={(e) => handleOption(e, title, "dec")}>
          -
        </button>
        <span>{options[title]}</span>
        <button onClick={(e) => handleOption(e, title, "inc")}>+</button>
      </span>
    </OptionItem>
  );
};

export default Option;

const OptionItem = styled.div`
  ${flexCenter("space-between")};
  font-size: 1rem;
  gap: 5px;
  text-transform: capitalize;
  padding: 8px;

  .item-func {
    ${flexCenter()};
    gap: 10px;

    button {
      padding: 6px 10px;
      font-size: 1.3rem;
      font-weight: 300;
      border: 1px solid rgba(0, 0, 0, 0.2);
      background-color: transparent;

      &:disabled {
        cursor: not-allowed;
      }
    }

    span {
      font-size: 1.1rem;
      color: var(--textDark);
    }
  }
`;
