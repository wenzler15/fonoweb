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

export const ContentTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 30px;
`;

export const Title = styled.div`
  width: 278px;
  height: 32px;
  display: flex;
  justify-content: flex-start;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: #181818;
  margin-left: 30px;
`;

export const ButtonAdd = styled.button`
  width: 193px;
  background: #233688;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  border: none;
  margin-right: 30px;
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
  margin-left: 35px;
  margin-top: 15px;
`;

export const ContentWeek = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentTitleWeek = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 60px;
`;

export const TitleWeek = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: #2d2d2d;
  margin-right: 73px;
`;

export const DescriptionWeek = styled.div`
  width: 200px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
  margin-top: 5px;
`;

export const ContentButton = styled.div`
  margin-top: 35px;
  margin-left: 100px;
`;

export const Button = styled.button`
  width: 193px;
  background: #233688;
  height: 48px;
  border-radius: 8px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;

export const ButtonToSee = styled.button`
  width: 74px;
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
  margin-left: 20px;
`;
