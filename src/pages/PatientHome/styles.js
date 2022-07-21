import styled from "styled-components";
import Bg from "../../assets/Card.png";

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
    width: 49vw;
    max-height: 79vh;
    border: 1px solid #ffffff;
    border-radius: 8px;
    margin-top: 10px;
    background-color: #ffffff;
    overflow: auto;
`;

export const ContentLeft = styled.div`
    width: 49vw;
    max-height: 79vh;
    border: 1px solid #ffffff;
    border-radius: 8px;
    margin-top: 10px;
    background-color: #ffffff;
    overflow: auto;
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
  width: 295px;
  margin: 0 auto;
`;

export const ContentSelectCity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0px;
`;

export const SelectCity = styled.select`
  width: 335px;
  height: 54px;
  left: 216px;
  top: 339px;
  background: #1e98d4;
  border-radius: 50px;
  border: none;
  color: #d3cece;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  padding-left: 110px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #d3cece;
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }
  ,
  :-ms-input-placeholder {
    color: #d3cece;
  }
`;
export const OptionCity = styled.option`
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #000;
    border: 1px solid;
    background: #d5d5d5!important;
`;

export const IconShearch = styled.div`
  margin-right: 139px;
  margin-top: -41px;
`;

export const ContentSelect = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 434px;
    margin: 10px auto;
`;

export const ContentTextSelect = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #1e98d4;
`;

export const Select = styled.select`
  border-radius: 8px;
  border: 1px solid #979797;
  color: #979797;
`;

export const Option = styled.option`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
`;

export const ContentResultFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const TextResultFilter = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
`;

export const ContentResult = styled.div`
    width: 650px;
    margin: 30px auto;
`;

export const PhotoDoctor = styled.div`
  width: 62px;
  height: 62px;
  border: 1px solid #000;
  border-radius: 50px;
  margin-left: 150px;
`;

export const Contenthigher = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ContentPhotoHigher = styled.div``;

export const PhotoHigher = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50px;
  background-color: #000;
  display: flex;
  margin-bottom: -55px;
  margin-left: 65px;
  border: none;
`;

export const NameDoctor = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #2d2d2d;
  margin-left: 10px;
`;

export const ButtonContactDoctor = styled.div`
  width: 76px;
  height: 25px;
  color: #d3cece;
  border-radius: 50px;
  cursor: pointer;
  border: 1px solid #1e98d4;
  background: #1e98d4;
  margin-left: 10px;
  padding-left: 10px;
  font-size: 14px;
`;

export const ContentResumeHigher = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  width: 50%;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
  margin-left: -30px;
`;

export const ConsultationLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-right: 150px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const Button = styled.button`
  width: 335px;
  height: 64px;
  border: 1px solid #1e98d4;
  background: #1e98d4;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

export const TitleQuery = styled.div`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #181818;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const ContentCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Card = styled.div`
  width: 335px;
  height: 180px;
  border-radius: 12px;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: 30vw;
  background-position: center;
`;

export const ContentDayMonth = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-start;
  margin-top: 20px;
  margin-left: 20px;
`;

export const DayMonth = styled.div`
    width: 92px;
    height: 25px;
    background: #1e98d4;
    border-radius: 50px;
    border: 1px solid #1e98d4;
    color: #fff;
    font-size: 14px;
`;

export const ContentNameDoctorCard = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-start;
  margin-top: 20px;
  margin-left: 20px;
`;

export const NameDoctorCard = styled.div`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: #d3cece;
`;

export const ConsultationLocationCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #d3cece;
`;
export const TimeCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  margin-top: 10px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  color: #d3cece;
`;

export const ContentButtonCard = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 40px;
`;

export const OpacityButtonCard = styled.button`
  width: 52px;
  height: 52px;
  background-color: #000;
  opacity: 0.5;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ButtonCard = styled.div`
  width: 42px;
  height: 42px;
  border: 3px solid #fff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentTitleLastQuery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  aling-items: center;
  margin-top: 30px;
  width: 100%;
`;

export const TitleLastQuery = styled.div`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #181818;
`;

export const ArrowRight = styled.div``;

export const ContentLastQuery = styled.div`
  width: 650px;
  margin: 30px auto;
`;

export const ContentPhotoLastQuery = styled.div``;

export const PhotoLastQuery = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50px;
  background-color: #000;
  display: flex;
  margin-bottom: -55px;
  margin-left: 80px;
  border: none;
`;

export const NameDoctorLastQuery = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #2d2d2d;
`;

export const LastDateQuery = styled.div`
  width: 104px;
  height: 28px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #d3cece;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1e98d4;
  border-radius: 50px;
`;

export const ResumeLastQuery = styled.div`
  width: 253px;
  height: 29px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentResumeLastQuery = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: -90px;
`;

export const OpacityResumeLastQuery = styled.button`
  width: 24px;
  height: 24px;
  background-color: #1e98d4;
  opacity: 0.9;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ButtonResumeLastQuery = styled.div`
  width: 19.2px;
  height: 19.2px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
