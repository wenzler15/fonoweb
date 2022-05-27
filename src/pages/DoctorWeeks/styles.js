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

export const ContentLeft = styled.div`
  width: 98vw;
  height: 85vh;
  border: 1px solid #ffffff;
  border-radius: 8px;
  margin-top: 10px;
  background-color: #ffffff;
`;

export const ContentWeeks = styled.div`
  margin-top: 30px;
`;

export const TitleWeeks = styled.div`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: #181818;
`;

export const DescriptionWeeks = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
`;

export const ContentCardExercisesWeeks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const CardExercisesWeeks = styled.div`
  width: 473px;
  height: 207px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

export const ContentTitlesWeeks = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const TitleCardExercisesWeeks = styled.div`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #11142d;
`;

export const DescriptionCardExercisesWeeks = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
  margin-top: 5px;
`;
