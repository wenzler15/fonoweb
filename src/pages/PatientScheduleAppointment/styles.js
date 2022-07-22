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
  height: 88vh;
  border: 1px solid #803888;
  background: linear-gradient(4.49deg, #803888 1.87%, #4762d9 100.14%), #6a6a6a;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
  margin-left: 30px;
`;

export const Title = styled.div`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  margin-left: 10px;
  color: #ffffff;
`;

export const ContentDateHour = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 40px;
  margin-top: 30px;
`;

export const ContentDate = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 75%;
    margin: 50px auto 20px auto;
`;

export const Date = styled.div`
  width: 32px;
  height: 24px;
  cursor: pointer;
  color: #ffffff;
  font-size: 28px;
`;

export const ContentHour = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 74%;
    margin: 70px auto 20px auto;
`;

export const Hour = styled.button`
  width: 80px;
  height: 40px;
  cursor: pointer;
  color: #ffffff;
  font-size: 28px;
  background: #358ac7;
  border-radius: 8px;
  border: none;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TitleText = styled.div`
  width: 117px;
  height: 43px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  margin-left: 60px;
  margin-top: 30px;
  color: #ffffff;
`;

export const Text = styled.div`
  width: 50%;
  height: 100px;
  margin-left: 60px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  background: linear-gradient(
    183.35deg,
    #ffffff 2.77%,
    rgba(255, 255, 255, 0) 98.5%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 60px;    
  margin-top: 40px;
`;

export const Button = styled.button`
  width: 235px;
  height: 54px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  color: #ffffff;
  background: #1e98d4;
  border-radius: 50px;
  border: none;
  cursor: pointer;
`;

export const ContentMonths = styled.div`
    display: flex;
    width: 74%;
    margin: 0 auto;
    font-family: 'Roboto Condensed';
    color: #fff;
    font-size: 20px;
    justify-content: space-between;
    margin-top: 30px;
`;

export const Month = styled.div`
    cursor: pointer;
`;
