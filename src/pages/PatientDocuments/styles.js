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

export const ContentDocuments = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px;
  margin-top: 30px;
`;

export const TitleDocuments = styled.div`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: #181818;
  margin-left: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 80px;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Title = styled.div`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #181818;
`;

export const Description = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
  margin-top: 5px;
`;

export const ContentButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-left: 60px;
`;

export const ButtonDown = styled.button`
  border: none;
  cursor: pointer;
  border-style: none;
  background: transparent;
  margin-left: 5px;
`;

export const ButtonUp = styled.button`
  border: none;
  cursor: pointer;
  border-style: none;
  background: transparent;
  margin-left: 5px;
`;
