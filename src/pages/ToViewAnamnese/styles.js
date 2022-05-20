import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #e5e5e5;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

export const ContentRight = styled.div`
  width: 90vw;
  height: 100vh;
  border: 1px solid #ffffff;
  border-radius: 8px;
  margin-top: 10px;
  background-color: #ffffff;
`;

export const ContentPacientes = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContentTitleText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitlePacientes = styled.div`
  width: 582px;
  height: 60px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #0a043c;
`;

export const DescriptionText = styled.text`
  width: 654px;
  height: 56px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  color: #2d2d2d;
`;

export const ButtonAddQuestion = styled.button`
  width: 95px;
  height: 48px;
  background: #c53434;
  border-radius: 8px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;
