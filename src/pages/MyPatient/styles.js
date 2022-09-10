import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
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
  border-radius: 0.5rem;
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
  border-radius: 0.5rem;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  padding-left: 0.5rem;
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
  background: #3a36db;
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
  margin-left: 1rem;
  width: 74px;
  height: 48px;
  background: #3a36db;
  border-radius: 8px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const Content = styled.section`
  display: flex;
  flex-flow: column;

  padding: 2rem;
  margin: 1rem;

  border-radius: 4px;
  border: 1px solid #ffffff;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  font-family: "Lato";

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    > h1 {
      font-size: 2rem;
    }
  }

  > strong {
    font-size: 1.5rem;
    text-align: center;
    margin: 0 auto;

    > button {
      color: #0090ff;
      font-weight: 700;
      cursor: pointer;
      background: transparent;
      border: 0;
    }
  }

  .patientList {
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
  }
`;

export const PatientData = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
