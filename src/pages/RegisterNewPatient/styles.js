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
  margin-top: 60px;
  margin-left: 30px;
`;

export const TitlePacientes = styled.div`
  width: 582px;
  height: 60px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #0a043c;
`;

export const ContentInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const Label = styled.label`
  width: 250px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #2d2d2d;
  margin-bottom: 2px;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #1e3354;
  padding-left: 20px;
`;

export const SelectGender = styled.select`
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #1e3354;
  padding-left: 20px;
`;

export const OptionGender = styled.option``;

export const ContentButton = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 30px;
  margin-top: 60px;
`;

export const ButtonRegisterPatient = styled.button`
  width: 300px;
  height: 50px;
  background: #1e98d4;
  border-radius: 70px;
  border: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
`;
