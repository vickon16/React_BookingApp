import styled from "styled-components";
import { IoMdLocate } from "react-icons/io";
import hotelImagesData from "../data/hotelImagesData.json";
import { flexCenter } from "../globalFunctions";
import MailList from "../components/MailList";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import { useState } from "react";

const Hotel = () => {
  const [images] = useState(hotelImagesData);
  const [slideImage, setSlideImage] = useState(null);
  const [openSlider, setOpenSlider] = useState(false);

  const handleSlider = (id) => {
    setSlideImage(images.find(img => img.id === id));
    setOpenSlider(true);
  }

  const ChangeImg = (id, operation) => {
    const currentIndex = images.indexOf(id);

    if (operation === "right") {
      setSlideImage(images[currentIndex + 1])
    } else {
      setSlideImage(images[currentIndex - 1])
    }
  }

  return (
    <Wrapper>
      <Container>
        {openSlider && slideImage && <Slider image={slideImage} close={setOpenSlider} changeImg={ChangeImg} />}
        <button className="book-now">Reserve or Book Now!</button>
        <h2 className="title">Tower Street Apartment</h2>
        <div className="hotel-address">
          <IoMdLocate />
          <span>New York </span>
        </div>
        <p className="hotel-distance">Excellent location - 500m from center</p>
        <p className="hotel-price">
          Book a stay over $114 at this property and get a free airport taxi
        </p>
        <HotelImages>
          {images.map((image) => (
            <div
              className="imageWrapper"
              key={image.id}
              onClick={() => handleSlider(image.id)}>
              <img src={image.img} alt={image.img} />
            </div>
          ))}
        </HotelImages>
        <HotelDetails>
          <article className="details-text">
            <h1>Stay in the heart of Krakow</h1>
            <p>
              Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
              Street apartments has accomodations with air conditioning and free
              Wifi. the units come with hardwood floors and feature a fully
              equipped kitcheneete aith a microwave, a flat-screen TV, and a
              private bathroom with shower and a hairdryer. a fridge is also
              offered, as well as an electric tea pot and a coffee machine.
              Popular points of the interest near the apartment include Cloth
              Hall, Main Market Square and Town Hall Tower. The nearest airport
              is John Paul II International Krakow-Balice, 16.1 km from Tower
              Street Apartments, and a property offers a paid airport shuttle
              service.
            </p>
          </article>
          <article className="details-price">
            <h4>Perfect for a 9-night stay!</h4>
            <span>
              Located in the real heart of the Krakow, this property has an
              execelent location score of 9.8!.
            </span>
            <p>
              <b>$945</b> (9 nights)
            </p>
            <button className="">Reserve or Book Now!</button>
          </article>
        </HotelDetails>
      </Container>
      <MailList />
      <Footer />
    </Wrapper>
  );
};

export default Hotel;

const Wrapper = styled.main`
  width: 100%;
  padding: 0 20px;
`;

const Container = styled.div`
  width: min(100%, 1150px);
  margin: 2rem auto 0;
  ${flexCenter("", "column", "flex-start")};
  gap: 10px;
  position: relative;

  button {
    border-radius: 5px;
    border: none;
    padding: 10px;
    background-color: var(--primaryBlue);
    color: var(--white);

    &.book-now {
      position: absolute;
      top: 10px;
      right: 0;

      @media screen and (max-width : 768px) {
        display: none;
      };
    }
  }

  .hotel-address {
    ${flexCenter()};
    gap: 5px;
    font-size: 0.9rem;
    color: var(--textDark);
  }
  .hotel-distance {
    color: var(--secondaryBlue);
    font-weight: 500;
  }
  .hotel-price {
    color: green;
  }
`;

const HotelImages = styled.section`
  ${flexCenter("space-between")};
  flex-wrap: wrap;
  user-select: none;

  .imageWrapper {
    width: 33%;
    cursor: pointer;

    @media screen and (max-width : 768px) {
      width: 50%;
    };
  }
`;

const HotelDetails = styled.section`
  ${flexCenter("space-between", "", "flex-start")};
  gap: 20px;
  margin-top: 20px;

  .details-text {
    flex: 3;

    p {
      font-size: 0.95rem;
      margin-top: 10px;
      color: var(--textDark);
    }
  }

  .details-price {
    flex: 1;
    background-color: #ebf3ff;
    padding: 20px;
    ${flexCenter("", "column", "flex-start")};
    gap: 15px;

    h4 {
      color: var(--textDark);
    }

    span {
      color: #555;
      font-size: clamp(0.85rem, 1vw, 1rem);
    }

    button {
      width: min(100%, 300px);
    }
  }

  @media screen and (max-width : 768px) {
    flex-direction: column;
  };
`;
