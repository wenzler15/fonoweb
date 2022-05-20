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
  margin-left: 30px;
`;

export const TitlePacientes = styled.div`
  height: 48px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  color: #803888;
`;

export const ConentInput = styled.div`
  margin-top: 60px;
  margin-left: 30px;
`;

export const Input = styled.input`
  width: 469px;
  height: 64px;
  background: #803888;
  border-radius: 50px;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  padding-left: 50px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    padding-left: 24px;
  }
`;

export const ContentEvaluation = styled.div`
  margin-top: 60px;
  margin-left: 30px;
`;

export const TitleEvaluation = styled.text`
  width: 158px;
  height: 41px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  color: #2d2d2d;
`;

export const ContainerContentEvaluation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DescriptionEvaluation = styled.text`
  width: 811px;
  height: 89px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #aaaaaa;
`;

export const ContentButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-right: 200px;
  margin-top: 5px;
`;

export const ButtonVisualization = styled.button`
  width: 125px;
  height: 48px;
  background: #803888;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
`;

export const ButtonUse = styled.button`
  width: 85px;
  height: 48px;
  background: #1e98d4;
  border-radius: 8px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;
