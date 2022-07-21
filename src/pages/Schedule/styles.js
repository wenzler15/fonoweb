import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 2rem;
  padding: 2rem;
  background: #fff;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 2rem;
    }

    button {
      padding: 1rem;
      border-radius: 0.2rem;
      border: 0;
      color: #fff;
      background: #1e98d4;

      &:hover {
        background: #125b80;
      }
    }
  }

  > section {
    strong {
      color: #aaa;
      font-weight: 600;
    }

    > div {
      display: flex;
      align-items: center;
      margin-top: 2rem;

      > img {
        height: 104px;
        width: 104px;

        border-radius: 50%;
        border: 2px solid black;
      }

      > div {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: flex-start;
        padding: 1rem;

        > span {
          display: flex;
          margin-left: 2rem;

          > h3 {
            font-size: 1.5rem;
          }

          > h4,
          h5 {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;

            border-radius: 1rem;
            padding: 0.5rem;
            font-size: 0.7rem;
          }

          h4 {
            margin-left: 2rem;
            background: #1e98d4;
          }

          h5 {
            margin-left: 0.1rem;
            background: #803888;
          }
        }

        > p {
          color: #aaa;
          text-align: center;
          max-width: 66%;
        }
      }

      > button {
        background: #803888;
        color: #fff;
        width: 84px;

        padding: 0.5rem;
        border-radius: 0.2rem;
        border: 0;
      }
    }
  }

  > form {
    display: flex;
    flex-flow: column;

    > button {
      padding: 1rem 2rem;
      margin-top: 2rem;
      border-radius: 0.2rem;
      border: 0;
      color: #fff;
      background: #1e98d4;

      &:hover {
        background: #125b80;
      }
    }
  }
`;

export const Calendar = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  --rdp-cell-size: 3rem;

  .rdp-day {
    background: #1e98d4;
    margin: 0.5rem;
    color: #fff;

    &:hover {
      background: #125b80;
      border: 1px solid #aaa;
    }
  }
`;

export const DatesContainer = styled.section`
  width: 66%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 1rem;

  button {
    width: 72px;
    background: #803888;
    color: #fff;

    padding: 1rem;
    border: 0;
    border-radius: 0.2rem;

    &:disabled {
      opacity: 0.3;
    }

    & + button {
      margin-left: 1rem;
    }
  }
`;
