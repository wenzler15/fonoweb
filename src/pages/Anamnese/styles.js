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

export const TitlePacientes = styled.div`
  width: 582px;
  height: 60px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #0a043c;
`;

export const ButtonAddQuestion = styled.button`
  width: 215px;
  height: 48px;
  background: #803888;
  border-radius: 8px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;

export const ContentSelectSpecialty = styled.div`
  margin-left: 100px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextSelectSpecialty = styled.text`
  width: 298px;
  height: 40px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #1e98d4;
`;

export const SelectSpecialty = styled.select`
  width: 264px;
  height: 52px;
  background: #ffffff;
  border: 2px solid #979797;
  border-radius: 25px;
`;

export const SelectOption = styled.option`
  width: 140px;
  height: 79px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
  padding-left: 24px;
`;

export const ContentDefaultModel = styled.div`
  margin-top: 60px;
  margin-left: 100px;
`;

export const DefaultModel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleDefaultModel = styled.text`
  width: 261px;
  height: 41px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  color: #2d2d2d;
`;

export const TextDefaultModel = styled.text`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  width: 130px;
  height: 28px;
  background: #1e98d4;
  border-radius: 50px;
  margin-left: 20px;
  margin-bottom: 5px;
`;

export const DescriptionDefaultModal = styled.text`
  width: 811px;
  height: 29px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #aaaaaa;
`;

export const ContentButtons = styled.div`
  margin-top: 20px;
`;

export const ButtonVisualization = styled.button`
  width: 125px;
  height: 48px;
  background: #803888;
  border-radius: 8px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;

export const ButtonEdit = styled.button`
  width: 95px;
  height: 48px;
  margin-left: 20px;
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

export const ButtonUse = styled.button`
  width: 85px;
  height: 48px;
  margin-left: 20px;
  background: #0090ff;
  border-radius: 8px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;
