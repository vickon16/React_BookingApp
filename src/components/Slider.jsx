import styled from 'styled-components'
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { flexCenter } from '../globalFunctions';

const Slider = ({ image, close, changeImg }) => {
  return (
    <Wrapper>
      <BsArrowLeftCircle className="left" onClick={() => changeImg(image, "left")} />
      <BsArrowRightCircle className="right" onClick={() => changeImg(image, "right")} />
      <SliderContainer>
        <IoMdCloseCircle className="close" onClick={() => close(false)} />
        <img src={image.img} alt="slider-img" />
      </SliderContainer>
    </Wrapper>
  );
};

export default Slider

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9;
  ${flexCenter()};
  user-select: none;

  svg {
    position: absolute;
    fill : lightgray;
    z-index: 99;
    cursor: pointer;
  }

  .left, .right {
     width: 40px;
    height: 40px;
  }

  .left {left: 3rem}
  .right {right: 3rem}

  @media screen and (max-width : 768px) {
    .left, .right {
      width: 30px;
      height: 30px;
      bottom: 25%;
    }
  };
`;

const SliderContainer = styled.section`
  width: min(100%, 1200px);
  margin: 0 auto;
  ${flexCenter("center")};
  position: relative;
  padding: 0 20px;

  .close {
    top: -50px;
    right: 10px;
    width: 30px;
    height: 30px;
  }

  img {
    border-radius: 10px;
  }

  @media screen and (max-width : 768px) {
    height: min(100%, 400px);

    img {
      height: 100%;
    }
  };
`;
