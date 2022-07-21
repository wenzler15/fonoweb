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

export const ContentDocuments = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px;
  margin-top: 30px;
`;

export const TitleDocuments = styled.div`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: #181818;
  margin-left: 30px;
`;


export const ContentFilter = styled.div`
    margin-top: 50px;
    width: 690px;
    font-family: "Roboto Condensed";
    margin-bottom: 70px;
`;

export const FilterLabel = styled.div`
    font-size: 18px;
    margin-left: 93px;
    font-weight: 600;
`;

export const ContentSelect = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 454px;
    margin-top: -27px;
`;

export const Select = styled.select`
    border-radius: 8px;
    border: none;
    color: #000;
`;

export const Option = styled.option`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
`;

export const ContentCalendar = styled.div`
    width: 230px;
    position: absolute;
    top: 206px;
    left: 310px;

    > section {
        margin-top: -17px;
        > div  {
            > div {
                display: flex;
                > div { > label { 
                    color: #000;
                    font-size: 15px;
                    top: -10px;
                 }}
            }
        }

        .range {
            display: block;
            width: 450px;
        }
        
    }
`;

export const ContentResult = styled.div`
    margin-left: 91px;
    color: #aaaaaa;
    font-family: "Roboto Condensed";
`;

export const ContentLastQuery = styled.div`
    width: 650px;
    margin-top: 50px;
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