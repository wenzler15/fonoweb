import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #e5e5e5;
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
  margin-top: 60px;
  margin-left: 30px;
`;

export const TitlePacientes = styled.div`
  height: 48px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  color: #803888;
`;

export const ButtonAddQuestion = styled.button`
  width: 215px;
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
`;

export const ContentTextArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 600px;
  height: 350px;
  border: 1px solid #1e98d4;
  border-radius: 34px;
  padding-left: 30px;
  padding-top: 20px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.17);
`;

export const ContentButtonSave = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const ButtonSave = styled.button`
  width: 600px;
  height: 80px;
  background: #1e98d4;
  border-radius: 50px;
  ont-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  color: #eaecf1;
  cursor: pointer;
  border: none;
`;

export const ContentModal = styled.div``;

export const Modal = styled.div`
  width: 400;
  background: rgba(45, 45, 45, 0.76);
  border: '2px solid #fff',
  boxShadow: 24,
`;
