import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import { MdHotel, MdPerson } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { flexCenter } from "../globalFunctions";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState({ adult: 0, children: 0, room: 0 });
  const [openOptions, setOpenOptions] = useState(false);
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleOption = (item, operation) => {
    setOptions((prev) => ({
      ...prev,
      [item]: operation === "inc" ? prev[item]++ : prev[item]--,
    }));
  };

  const handleSearch = () => {
    navigate(`/hotels`, {state : {destination, date, options}})
  }

  const createOptions = () => {
    let result = [];
    for (let item in options) {
      const option = () => (
        <div className="options-item" key={item}>
          <span className="item-text">{item}</span>
          <span className="item-func">
            <button
              disabled={options[item] <= 1}
              onClick={() => handleOption(item, "dec")}>
              -
            </button>
            <span>{options[item]}</span>
            <button onClick={() => handleOption(item, "inc")}>+</button>
          </span>
        </div>
      );
      result.push(option());
    }
    return result;
  };

  return (
    <Wrapper>
      <Container>
        <HeaderContent>
          <h1 className="header-title">
            A Lifetime of discounts? It's Genius.
          </h1>
          <p className="header-desc">
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free Vickonary account
          </p>
          <button className="header-btn">Sign in / Register</button>
          <HeaderSearch>
            <article>
              <MdHotel />
              <input
                type="text"
                className="search-input"
                placeholder="Where are you going"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </article>
            <article>
              <FaCalendarAlt />
              <span
                className="header-search-text"
                onClick={() => setOpenDate((prev) => !prev)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} 
                  to ${format(date[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </article>
            <article>
              <MdPerson />
              <span
                className="header-search-text"
                onClick={() => setOpenOptions((prev) => !prev)}>
                {options.adult} adult &#8226; {options.children} children
                &#8226; {options.room} room
              </span>
              {openOptions && <Options>{createOptions()}</Options>}
            </article>
            <article>
              <button className="header-btn" onClick={handleSearch}>
                Search
              </button>
            </article>
          </HeaderSearch>
        </HeaderContent>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  background-color: var(--primaryBlue);
  color: var(--white);
  padding: 0 20px;
`;

const Container = styled.div`
  padding: 15px 0px 50px;
  width: min(100%, 1150px);
  margin: 0 auto;
`;

const HeaderContent = styled.div`
  ${flexCenter("flex-start", "column", "flex-start")};
  gap: 16px;
  position: relative;

  .header-btn {
    background-color: var(--secondaryBlue);
    color: var(--white);
    padding: 8px;
    font-size: 0.95rem;
  }
`;

const HeaderSearch = styled.div`
  height: 50px;
  background-color: var(--white);
  border: 3px solid var(--primaryYellow);
  ${flexCenter("space-around")};
  color: var(--lightGray);
  padding: 15px 10px;
  border-radius: 5px;
  position: absolute;
  bottom: -65%;
  width: 100%;
  vertical-align: center;
  z-index: 2;

  > article {
    ${flexCenter()};
    gap: 10px;
    cursor: pointer;
    user-select: none;

    .search-input {
      border: none;
      padding: 10px 0;
    }

    .date {
      position: absolute;
      top: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    position: static;
    gap: 15px 10px;
    justify-content: space-between;

    > article {
      width: 48%;
    }
  }

  @media screen and (max-width: 425px) {

    > article {
      width: 100%;
    }
  }
`;

const Options = styled.div`
  position: absolute;
  top: 100%;
  background-color: var(--white);
  color: gray;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: min(100%, 200px);

  .options-item {
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
  }
`;
