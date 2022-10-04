import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdHotel, MdPerson } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { flexCenter } from "../globalFunctions";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import Option from "../components/Option";
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
  const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });
  const [openOptions, setOpenOptions] = useState(false);
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleOption = (item, operation) => {
    setOptions((prev) => ({
      ...prev,
      [item]: operation === "inc" ? prev[item] + 1 : prev[item] - 1,
    }));
  };

  const handleSearch = () => {
    navigate(`/hotels`, { state: { destination, date, options } });
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
              {openOptions && (
                <Options>
                  <Option
                    title="adult"
                    options={options}
                    handleOption={handleOption}
                  />
                  <Option
                    title="children"
                    options={options}
                    handleOption={handleOption}
                  />
                  <Option
                    title="room"
                    options={options}
                    handleOption={handleOption}
                  />
                </Options>
              )}
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
  z-index: 99;

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
      right: 0;
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
  z-index: 999;
`;
