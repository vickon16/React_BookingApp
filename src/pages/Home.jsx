import styled from "styled-components";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MailList from "../components/MailList";
import PropertyList from "../components/PropertyList";
import { flexCenter } from "../globalFunctions";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Featured />
        <h3 className="home-title">Browse by property type</h3>
        <PropertyList />
        <h3 className="home-title">Homes guests love</h3>
        <Featured />
      </Container>
      <MailList />
      <Footer />
    </>
  );
};

export default Home;

const Container = styled.main`
  ${flexCenter("", "column")};
  margin: 50px auto 0;
  gap: 30px;
  width: min(100%, 1150px);
  padding: 0 20px;

  .home-title {
    width: fit-content;
    align-self: flex-start;
  }
`;

