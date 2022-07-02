import styled from "styled-components";
import ImgBg from "../../assets/loginBackground.png";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  background-image: url(${ImgBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const BgGradient = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: linear-gradient(
      182deg,
      rgba(30, 152, 212, 0.5),
      rgba(30, 152, 212, 0) 25%
    ),
    linear-gradient(62deg, rgba(35, 54, 136, 0.9), rgba(35, 54, 136, 0) 100%),
    linear-gradient(304deg, rgba(128, 56, 136, 0.9), rgba(128, 56, 136, 0) 100%);
`;

export const ContainerContent = styled.div`
  width: 29.5%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  z-index: 1100;
`;

export const InitialText = styled.text`
  font-weight: bold;
  font-size: 64px;
  color: #fff;
  font-family: "Roboto Condensed";
`;

export const NormalText = styled.text`
  font-size: 24px;
  color: #fff;
  font-family: "Lato";
`;

export const LogoFonoweb = styled.img`
  margin-top: 5%;
  width: 10.9%;
  min-width: 200px;
`;

export const Inputs = styled.input`
  margin: 10px 0px;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 50px;
  height: 50px;
  padding-left: 15px;
  background: none;
  color: #fff;
`;

export const SmallText = styled.text`
  font-size: 14px;
  color: ${(props) => (props.blue ? "#1E98D4" : "#FFF")};
  cursor: ${(props) => (props.blue ? "pointer" : "default")};
  margin-left: 10px;
  font-family: "Lato";
`;

export const SmallTextContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SmallTextContainerButton = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const ContainerRedeem = styled.div`
  margin: 10px 0px;
  display: flex;
  width: 100%;
  justify-content: end;
`;

export const TextRedeem = styled.span`
  font-size: 0.85rem;
  color: ${(props) => (props.blue ? "#1E98D4" : "#FFF")};
  cursor: ${(props) => (props.blue ? "pointer" : "default")};
  font-family: "Lato";
`;

export const ContainerButton = styled.div`
  width: 100%;
  background: #1e98d4;
  border-radius: 50px;
  height: 60px;
  padding-top: 10px;
  cursor: pointer;
`;

export const ContainerButtonText = styled.text`
  color: #fff;
  font-size: 24px;
  font-family: "Lato";
`;

export const ContentTitles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
