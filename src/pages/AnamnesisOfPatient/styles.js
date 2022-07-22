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
      margin-bottom: 100px;

      h1 {
        color: #803888;
        font-family: "Lato";
        font-weight: 700;
        margin-bottom: 10px;
      }

      h2 {
        font-weight: 300;
        font-size: 36px;
        line-height: 100%;
        letter-spacing: 0.24px;
        color: #2D2D2D;
      }

      button {
        border: 0;
        border-radius: 0.25rem;
        padding: 14px 24px;
        height: 48px;
        line-height: 20px;
        background: #C53434;
        color: #fff;

        &:hover {
          background: #5e2963;
        }
      }
    }

    .info-questions {
      .info-questions-item {
        &:not(:last-child) {
          margin-bottom: 30px;
        }

        h3 {
          font-weight: 700;
          font-size: 29px;
          line-height: 100%;
          letter-spacing: 0.24px;
          color: #2D2D2D;
        }

        p {
          font-weight: 300;
          margin-bottom: 0;
        }
      }
    }

    .box-action {
      margin-top: 100px;
      
      button {
        padding: 1rem 2rem;
        margin-top: 2rem;
        border-radius: 50px;
        border: 0;
        color: #fff;
        background: #1e98d4;
        width: 100%;
      }

      button:hover {
        background-color: #125b80;
      }
    }
  }

`;

