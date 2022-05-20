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
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitlePacientes = styled.div`
  height: 48px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  color: #803888;
`;

export const ButtonExport = styled.button`
  width: 116px;
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
`;

export const SearchForEvaluationModels = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const TextSearchModels = styled.text`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  color: #803888;
`;

export const ContentSelectSpecialty = styled.div`
  margin-left: 30px;
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
  flex-direction: column;
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

export const ContentButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const TextDown = styled.text`
  width: 46px;
  height: 24px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #2d2d2d;
  margin-top: 2px;
  cursor: pointer;
`;

export const TextDelete = styled.text`
  width: 46px;
  height: 24px;
  margin-top: 2px;
  margin-left: 50px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #2d2d2d;
  cursor: pointer;
`;
