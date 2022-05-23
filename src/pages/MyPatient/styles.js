import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;
  overflow: hidden;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const TitlePacientes = styled.div`
  width: 582px;
  height: 60px;
  margin-left: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #0a043c;
`;

export const ButtonMySchedule = styled.button`
  width: 335px;
  height: 64px;
  margin-right: 20px;
  background: #1e98d4;
  border-radius: 50px;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;

export const ContentFilterAddPatient = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const Input = styled.input`
  width: 469px;
  height: 64px;
  background: #803888;
  border-radius: 50px;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  padding-left: 50px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    padding-left: 24px;
  }
`;

export const ButtonAddPatient = styled.div`
  width: 193px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #233688;
  border-radius: 8px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;

export const ContentTablePatient = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  justify-content: space-evenly;
  margin-top: 80px;
  overflow-y: auto;
`;

export const ContentUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const User = styled.div`
  width: 145px;
  height: 32px;
  maring-top: 10px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #2d2d2d;
`;

export const ContentNewAnamneseEvolution = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const AddAnamnese = styled.button`
  width: 177px;
  height: 48px;
  background: #3a36db;
  border-radius: 8px;
  ont-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-right: 20px;
`;

export const AddEvolution = styled.button`
  width: 177px;
  height: 48px;
  background: ##1e98d4;
  border-radius: 8px;
  ont-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const ContentAddAssessment = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const AddAssessment = styled.button`
  width: 246px;
  height: 48px;
  background: #233688;
  border-radius: 8px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const ContentCheckUser = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const CheckUser = styled.button`
  width: 74px;
  height: 48px;
  background: #803888;
  border-radius: 8px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
