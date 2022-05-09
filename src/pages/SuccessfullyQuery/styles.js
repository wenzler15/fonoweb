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
  width: 100vw;
  height: 89vh;
  border: 1px solid #803888;
  background: linear-gradient(4.49deg, #803888 1.87%, #4762d9 100.14%), #6a6a6a;
`;

export const ContentImgCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const ContentMenssageSuccessfully = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 100px;
`;

export const MenssageSuccessfully = styled.div`
  position: absolute;
  width: 500px;
  height: 200px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  color: #ffffff;
`;

export const ContentButton = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 80px;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 90px;
  height: 30px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  border: none;
  background: transparent;
  cursor: pointer;
`;
