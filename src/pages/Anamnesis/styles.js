import styled from "styled-components";

export const Container = styled.div`
  background: #e5e5e5;
  height: 100vh;

  section {
    background: #fff;
    margin: 4rem;
    padding: 4rem;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

    > span {
      display: flex;
      justify-content: space-between;

      > h1 {
        color: #803888;
        font-family: "Lato";
        font-weight: 700;
      }

      > button {
        border: 0;
        border-radius: 0.25rem;
        padding: 1rem;

        background: #803888;
        color: #fff;

        &:hover {
          background: #5e2963;
        }
      }
    }

    > div {
      display: flex;
      flex-direction: column;

      > h3 {
        font-size: 1.25rem;
        color: #1e98d4;
      }

      > div {
        width: 260px;
      }
    }
  }

  @media (max-width: 675px) {
    section {
      margin: 1rem;
      padding: 1rem;

      > span {
        flex-flow: column;
      }

      > div {
        margin-top: 1rem;
      }
    }
  }
`;

export const ModelContainer = styled.div`
  font-family: "Lato";

  margin-top: 1rem;
  padding: 1rem;

  span {
    display: flex;

    > h1 {
      font-size: 1.75rem;
      font-weight: 600;
    }

    > strong {
      color: #fff;
      background: #1e98d4;
      height: 2rem;

      border-radius: 2rem;
      margin-left: 1rem;
      padding: 0 1rem;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.75rem;
    }
  }

  p {
    color: #aaa;
    font-size: 1rem;
  }

  div {
    display: flex;

    button {
      padding: 1rem 2rem;
      border-radius: 1rem;
      border: 0;
      color: #fff;

      & + button {
        margin-left: 1rem;
      }
    }

    .violet {
      background: #803888;
    }

    .red {
      background: #c53434;
    }

    .blue {
      background: #0090ff;
    }
  }

  @media (max-width: 675px) {
    span {
      flex-flow: column;

      h1 {
        font-size: 1.5rem;
      }

      strong {
        margin-left: 0;
      }
    }

    p {
      margin-top: 1rem;
    }

    div {
      flex-flow: column;
      width: 100% !important;

      button {
        width: 100%;

        & + button {
          margin: 0;
          margin-top: 1rem;
        }
      }
    }
  }
`;
