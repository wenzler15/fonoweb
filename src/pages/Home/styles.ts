import styled from "styled-components";
import ImgBg from "../../assets/loginBackground.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  background-image: url(${ImgBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  > section {
    z-index: 2;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 33%;
    height: 100%;

    > strong {
      font-size: 1.25rem;
      color: #cccccc;
      font-weight: 400;

      margin-top: 4rem;
      margin-bottom: 4rem;
    }

    > div {
      width: 100%;
      > button {
        padding: 1rem;
        width: 100%;
        color: #000;

        background: #fff;
        border-radius: 2rem;
        border: 1px solid #fff;
      }
    }

    .professionalButton {
      background: #803888;
      color: #fff;
      margin-top: 1rem;
    }
  }
`;

export const LinearBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;

  background: linear-gradient(
      182deg,
      rgba(30, 152, 212, 0.5),
      rgba(30, 152, 212, 0) 25%
    ),
    linear-gradient(62deg, rgba(35, 54, 136, 0.9), rgba(35, 54, 136, 0) 100%),
    linear-gradient(304deg, rgba(128, 56, 136, 0.9), rgba(128, 56, 136, 0) 100%);
`;
