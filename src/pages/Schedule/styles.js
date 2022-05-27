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
  width: 90vw;
  height: 100vh;
  border-radius: 8px;
  margin-top: 10px;
  border: 1px solid #ffffff;
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

export const ButtonEditSchedule = styled.button`
  width: 329px;
  height: 56px;
  background: #1e98d4;
  border-radius: 70px;
  border: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  color: #ffffff;
  cursor: pointer;
`;

export const ContentMsgFilter = styled.div`
  margin-top: 60px;
  margin-left: 140px;
`;

export const MsgFilter = styled.div`
  width: 559px;
  height: 36px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: #aaaaaa;
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 50px;
`;

export const ContentPhoto = styled.div``;

export const ContentColumn = styled.div`
  width: 500px;
`;

export const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ContentName = styled.div`
  width: 500px;
  height: 36px;
`;

export const Name = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #2d2d2d;
`;

export const ContentDateMonth = styled.div`
  width: 200px;
  height: 28px;
  padding: 0px 30px;
  background: #1e98d4;
  border-radius: 50px;
`;

export const DateMonth = styled.text`
  width: 80px;
  height: 12px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
`;

export const ContentHour = styled.div`
  width: 80px;
  height: 28px;
  padding: 0px 13px;
  background: #803888;
  border-radius: 50px;
`;

export const Hour = styled.text`
  width: 20px;
  height: 12px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
`;

export const ContentDescription = styled.div`
  width: 250px;
`;

export const Description = styled.text`
  width: 200px;
  height: 29px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
`;

export const ContentButton = styled.div``;

export const Button = styled.button`
  width: 74px;
  height: 48px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  background: #803888;
  border-radius: 8px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
