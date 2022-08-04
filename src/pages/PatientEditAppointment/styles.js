import { style } from "@mui/system";
import styled from "styled-components";
import bgDoctor from "../../assets/bgDoctor.png";

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
  background-image: url(${bgDoctor});
  background-repeat: no-repeat;
  background-size: 100vw;
`;

export const ContentArrowLeft = styled.div`
  margin-top: 40px;
  margin-left: 40px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
`;

export const ContentNameStreet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameDoctor = styled.div`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  color: #ffffff;
`;

export const Street = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  margin-left: 5px;
`;

export const ContentDateHour = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
`;

export const Date = styled.div`
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-right: 50px;
  background: #1e98d4;
  border-radius: 50px;
  color: #ffffff;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
`;

export const Hour = styled.div`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  margin-left: 5px;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const Button = styled.button`
  width: 335px;
  height: 84px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  color: #ffffff;
  background: #1e98d4;
  border-radius: 50px;
  border: none;
  cursor: pointer;
`;

export const ButtonCancel = styled(Button)`
  background-color: #C53434 !important
`

export const ButtonReschedule = styled(Button)`
  background-color: #803888 !important
`
