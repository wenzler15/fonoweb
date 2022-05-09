import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.text`
  font-size: 24px;
  font-weight: bold;
  font-family: "Roboto Condensed";
`;

export const NormalText = styled.text`
  margin-top: 10px;
  font-size: 14px;
  font-family: "Lato";
`;

export const InputTitle = styled.text`
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 18px;
  color: #181818;
`;

export const ContainerInputs = styled.div`
  width: 410px;
  margin-top: 30px;
  text-align: start;
`;

export const ButtonContainer = styled.div`
  width: 410px;
  height: 50px;
  background: #1e98d4;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding-top: 15px;
`;

export const ButtonContainerText = styled.text`
  color: #fff;
  font-size: 25px;Soul
`;

export const ContainerModal = styled.div`
  position: absolute;
  width: 400px;
  height: 300px;
  background: #fff;
  margin-top: 10%;
  padding-top: 25px;
`;

export const TitleModal = styled.text`
  font-size: 24px;
  color: #803888;
`;
