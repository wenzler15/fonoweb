import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

export const ContentRight = styled.div`
  width: 98vw;
  height: 85vh;
  border: 1px solid #ffffff;
  border-radius: 8px;
  margin-top: 10px;
  background-color: #ffffff;
`;

export const ContentPacientes = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-evenly;
`;

export const TitlePacientes = styled.div`
  width: 550px;
  height: 53px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 110%;
  color: #181818;
`;
