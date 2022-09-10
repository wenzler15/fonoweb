import styled from "styled-components";

export const Container = styled.div`
  background: #e5e5e5;
  padding-bottom: 4rem;

  section {
    background: #fff;
    padding: 4rem;
    margin: 4rem 4rem 0;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

    .info-top {
      display: flex;
      justify-content: space-between;

      h1 {
        color: #803888;
        font-family: "Lato";
        font-weight: 700;
        margin-bottom: 70px;
      }

      a {
        font-weight: 400;
        font-size: 27px;
        line-height: 150%;
        letter-spacing: 0.15px;
        color: #803888;
        text-decoration: none;
        display: flex;
        align-items: center;

        img {
          margin-bottom: -4px;
          margin-left: 8px;
        }
        
      }

      button {
        border: 0;
        border-radius: 0.25rem;
        padding: 14px 24px;
        height: 48px;
        line-height: 20px;
        background: #1E98D4;
        color: #fff;

        &:hover {
          background-color: #125b80;
        }
      }
    }

    form {
      textarea {
        height: 600px;
        width: 100%;
        border-radius: 34px;
        padding: 30px 40px;
        font-size: 26px;
        font-weight: 300;
        line-height: 100%;
        letter-spacing: 0.24px;
  
        &::placeholder {
          color: rgba(0, 0, 0, 0.17);
        }
      }

      button {
        padding: 1rem 2rem;
        margin-top: 2rem;
        border-radius: 50px;
        border: 0;
        color: #fff;
        background: #1e98d4;
        width: 100%;

        &:hover {
          background-color: #125b80;
        }
      }
    }
  }
`;
