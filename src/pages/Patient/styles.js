import { Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  background: #e5e5e5;
  width: 100%;
  font-family: "Lato";
`;

export const ExportContainer = styled.div`
  padding: 2rem 4rem;
  margin: 4rem;

  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;

  background: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

  > div {
    display: flex;
    align-items: center;
    flex-flow: row;

    > h1 {
      font-size: 1.5rem;
      margin-left: 1rem;
    }
  }

  > button {
    font-family: "Lato";
    color: #fff;
    background: #803888;
    padding: 0.75rem 4rem;

    text-transform: capitalize;

    &:hover {
      color: #181818;
      transition: all 0.5s;
    }
  }

  @media (max-width: 500px) {
    flex-flow: column;
    padding: 1rem;
    margin: 1rem;

    > button {
      margin-top: 1rem;
      padding: 0.5rem 4rem;
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;

  margin-left: auto;
  justify-content: space-between;
  align-items: center;

  > h3 {
    color: #fff;
    font-size: 1.35rem;
    font-family: "Roboto Condensed";
    font-weight: 700;

    margin-right: 1rem;
  }
`;

export const UserContainerButton = styled(Button)`
  background: #181818;
  height: 64px;
  width: 64px;
  border-radius: 50%;

  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
`;

export const RecordContainer = styled.div`
  padding: 4rem;
  margin: 4rem;
  margin-bottom: 0;

  background: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-flow: column;

  > h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #803888;
  }

  > h3,
  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2d2d2d;
  }

  > h4 {
    margin-top: 1rem;
  }

  > p {
    font-size: 1.25rem;
    color: #aaa;
  }

  @media (max-width: 500px) {
    flex-flow: column;
    padding: 1rem;
    margin: 1rem;

    > h1 {
      font-size: 1.5rem;
    }

    > h3,
    h4 {
      font-size: 1rem;
    }

    > p {
      font-size: 0.75rem;
    }

    > button {
      margin-top: 1rem;
      padding: 0.5rem 4rem;
    }
  }
`;

export const AnamnesisContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 4rem;

  > h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #803888;
  }

  > button {
    font-family: "Lato";
    color: #fff;
    background: #1e98d4;
    padding: 0.5rem 1rem;

    text-transform: capitalize;

    &:hover {
      color: #181818;
      transition: all 0.5s;
    }
  }

  @media (max-width: 500px) {
    margin-top: 1rem;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

    > h1 {
      font-size: 1.5rem;
    }
  }
`;

export const AppointmentContainer = styled.div`
  margin-top: 4rem;

  display: flex;
  flex-flow: column;

  > div {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;

    > h1 {
      font-size: 2.5rem;
      font-weight: 600;
      color: #803888;
    }

    > button {
      font-family: "Lato";
      color: #fff;
      background: #1e98d4;
      padding: 0.5rem 1rem;

      text-transform: capitalize;

      &:hover {
        color: #181818;
        transition: all 0.5s;
      }
    }
  }

  @media (max-width: 500px) {
    margin-top: 1rem;

    > div {
      > h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

export const Appointment = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;

  margin-top: 2rem;

  > span {
    display: flex;
    flex-direction: row;
    align-items: center;

    > h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #000;
    }

    > p {
      color: #fff;
      font-size: 0.75rem;

      border-radius: 1rem;
      margin-left: 1rem;
      padding: 0.5rem;
      background: #1e98d4;
    }
  }

  > p {
    font-size: 1.25rem;
    color: #000;
  }

  button {
    font-family: "Lato";
    color: #fff;
    background: #1e98d4;
    padding: 0.5rem 1rem;

    text-transform: capitalize;

    &:hover {
      color: #181818;
      transition: all 0.5s;
    }
  }

  .exercise {
    width: 100%;

    display: flex;
    flex-flow: column !important;
    justify-content: flex-start !important;

    margin-top: 2rem;
    padding-left: 4rem;

    position: relative;

    border-left: 2px solid #1e98d4;

    > span {
      display: flex;
      align-items: center;

      > h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #000;
      }

      > p {
        color: #fff;
        font-size: 0.75rem;

        border-radius: 1rem;
        margin-left: 1rem;
        padding: 0.5rem;
        background: #1e98d4;
      }
    }

    > div {
      width: 100%;
      display: flex;
      flex-flow: row;
      justify-content: space-between;

      > p {
        color: #aaa;
        font-size: 1rem;
        max-width: 75%;
      }
    }
  }

  @media (max-width: 500px) {
    margin-top: 1rem;

    > span {
      > h3 {
        font-size: 1rem;
      }

      > p {
        font-size: 0.75rem;
        margin-bottom: 0;
      }
    }

    > h3,
    p {
      font-size: 1rem;
    }

    .exercise {
      padding-left: 2rem;

      > span {
        > h3 {
          font-size: 1rem;
        }
        > p {
          font-size: 0.75rem;
          margin-bottom: 0;
        }
      }

      > div {
        align-items: center !important;
        > p {
          font-size: 0.75rem;
          max-width: 50%;
        }

        > button {
          height: 40px;
        }
      }
    }
  }
`;
