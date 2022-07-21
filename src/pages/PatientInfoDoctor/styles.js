import styled from "styled-components";
import PhotoDoctor from "../../assets/photoDoctor.png";

export const MainContainer = styled.div`
  width: 100%;
  height: auto;
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
  background: linear-gradient(4.49deg, #803888 1.87%, #4762d9 100.14%), #6a6a6a;
`;

export const ContentScheduleQuery = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
`;

export const DoctorPhoto = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 168px;
  background-image: url(${PhotoDoctor});
  background-repeat: no-repeat;
  margin-left: 90px;
  position: absolute;
`;

export const Content = styled.div`
    width: 880px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`;

export const NameDoctor = styled.div`
  width: 312px;
  height: 77px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  color: #ffffff;
  display: flex;
  flex-direction: row;
`;

export const ScheduleOpen = styled.div`
  width: 204px;
  height: 52px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  background: #1e98d4;
  border-radius: 50px;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 15px;
`;

export const TimeQuery = styled.div`
    width: 126px;
    height: 24px;
    left: 11px;
    top: -3px;
    position: relative;
    font-family: "Lato";
    font-style: normal;
    font-weight: 800;
    font-size: 17px;
    color: #ffffff;
`;

export const ContentDown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 810px;
`;

export const OfficeAddress = styled.div`
    width: 400px;
    height: 24px;
    left: 10px;
    top: 11px;
    position: relative;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #ffffff;
`;

export const Specialty = styled.div`
    width: 266px;
    height: 24px;
    position: relative;
    left: -110px;
    top: 11px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #ffffff;
`;

export const ContentText = styled.div`
    width: 50vw;
    margin: 0 auto;
`;

export const Text = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #c5bcbc;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 60px;
`;

export const Button = styled.button`
    width: 320px;
    height: 70px;
    position: relative;
    background: #1e98d4;
    border-radius: 50px;
    border: none;
    font-size: 28px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    color: #ffffff;
`;
