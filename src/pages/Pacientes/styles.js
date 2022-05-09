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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px;
  margin-top: 30px;
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

export const ContentContainerPacientes = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const ContentNamePaciente = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const NamePaciente = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
`;

export const ContentDateHour = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 30px;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 28px;
  background: #1e98d4;
  border-radius: 50px;
  margin-top: 3px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
`;

export const Hour = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 28px;
  background: #803888;
  border-radius: 50px;
  margin-top: 3px;
  margin-left: 5px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
`;

export const ContentAboutText = styled.div`
  margin-left: 22px;
  width: 400px;
  height: 29px;
`;

export const AboutText = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 74px;
  height: 48px;
  background: #803888;
  border-radius: 8px;
  boder: none;
  cursor: pointer;
  margin-left: 150px;
`;

export const Button = styled.div`
  width: 26px;
  height: 19px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  color: #ffffff;
`;
