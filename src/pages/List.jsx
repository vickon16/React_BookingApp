import { useState } from "react";
import { useLocation} from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "../globalFunctions";
import ResultItem from "../components/ResultItem";

const List = () => {
  const location = useLocation();
  const [destination] = useState(location.state && location.state.destination);
  const [date] = useState(location.state && location.state.date);
  const [options] = useState(location.state && location.state.options);

  return (
    <Wrapper>
      <Container>
        <ListSearch>
          <h3 className="title">Search</h3>
          <SearchForm>
            <div className="formInput">
              <label htmlFor="dest">Destination</label>
              <input
                type="text"
                placeholder={`${destination || "No destination"}`}
              />
            </div>
            <div className="formInput">
              <label htmlFor="dest">Check-in Date</label>
              <span>{`${date && new Date(date[0].startDate).toLocaleDateString()} 
                  to ${date && new Date(date[0].endDate).toLocaleDateString()}`}</span>
            </div>
          </SearchForm>
          <h3 className="title">Options</h3>
          <SearchOptions>
            <OptionItem>
              <span className="text">
                Min price <small>per night</small> :
              </span>
              <input type="number" min={1} />
            </OptionItem>
            <OptionItem>
              <span className="text">
                Max price <small>per night</small> :
              </span>
              <input type="number" />
            </OptionItem>
            <OptionItem>
              <span className="text">Adult :</span>
              <input
                type="number"
                min={1}
                placeholder={`${options && options.adult}`}
              />
            </OptionItem>
            <OptionItem>
              <span className="text">Children :</span>
              <input
                type="number"
                min={0}
                placeholder={`${options && options.children}`}
              />
            </OptionItem>
            <OptionItem>
              <span className="text">Room :</span>
              <input
                type="number"
                min={1}
                placeholder={`${options && options.room}`}
              />
            </OptionItem>
            <button>Search</button>
          </SearchOptions>
        </ListSearch>
        <ListResult>
          <ResultItem />
          <ResultItem />
          <ResultItem />
          <ResultItem />
          <ResultItem />
          <ResultItem />
          <ResultItem />
        </ListResult>
      </Container>
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.main`
  width: 100%;
  ${flexCenter("center")};
  margin-top: 20px;
  padding: 0 20px;
`;

const Container = styled.div`
  width: min(100%, 1150px);
  ${flexCenter("", "", "flex-start")};
  gap: 20px;

  @media screen and (max-width : 768px) {
    flex-direction: column;
  };
`;
const ListSearch = styled.section`
  flex: 1;
  background-color: var(--primaryYellow);
  padding: 10px;
  border-radius: 6px;
  position: sticky;
  top: 10px;
  width: min(100%, 400px);

  .title {
    margin: 0.5rem 0;
    color: var(--textDark);
  }

  @media screen and (max-width : 768px) {
    position: static;
  };
`;
const ListResult = styled.section`
  flex: 3;
  width: 100%;
`;

const SearchForm = styled.form`
  ${flexCenter("", "column", "flex-start")}
  gap: 10px;
  

  .formInput {
    ${flexCenter("", "column", "flex-start")}
    gap: 5px;

    input,
    span {
      height: 30px;
      border: none;
      padding: 5px;
      width: 100%;
    }

    span {
      color: var(--textDark);
      font-size: 0.8rem;
      font-weight: 300;
      background-color: var(--white);
    }
  }
`;

const SearchOptions = styled.div`
  padding: 5px;

  > article {
    margin-bottom: 10px;
  }

  button {
    padding: 8px 10px;
    background-color: var(--secondaryBlue);
    color: var(--white);
    font-size: 1rem;
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const OptionItem = styled.article`
  ${flexCenter("space-between")};
  gap: 5px;

  span {
    font-size: 0.9rem;
  }

  input {
    height: 30px;
    border: none;
    padding: 5px;
    width: 50px;
  }

  @media screen and (max-width : 768px) {
    justify-content: flex-start;
    gap: 10px;
  };
`;
