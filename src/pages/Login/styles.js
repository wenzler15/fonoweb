import styled from "styled-components";
import ImgBg from "../../assets/background.png";

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

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  margin-bottom: 30px;
  font-family: "Lato";
`;

export const LogoFonoweb = styled.img``;

export const Inputs = styled.input`
  width: 400px;
  border: 1px solid #fff;
  border-radius: 50px;
  height: 40px;
  padding-left: 15px;
  background: none;
  color: #fff;
  margin-top: 15px;
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
  margin-top: 15px;
`;

export const SmallTextContainerButton = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: center;
`;

export const ContainerButton = styled.div`
  width: 420px;
  background: #1e98d4;
  margin-top: 15px;
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
  margin-top: 65%;
`;
