import { style } from "@mui/system";
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
  height: 95vh;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;

export const InputTitle = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #1e98d4;
  padding-left: 20px;
`;

export const InputDescription = styled.textarea`
  width: 500px;
  height: 300px;
  border: 1px solid #1e98d4;
  border-radius: 34px;
  margin-top: 20px;
  padding-left: 20px;
  padding-top: 15px;
`;

export const InputURL = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #1e98d4;
  padding-left: 20px;
  margin-top: 20px;
`;

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
