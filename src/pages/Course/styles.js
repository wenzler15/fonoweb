import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 6rem;
  background-color: #e5e5e5;

  > h1 {
    font-family: "Mulish";
    color: #11142d;
    font-size: 2rem;
    font-weight: 700;
  }

  > h2 {
    font-family: "Lato";
    font-weight: 300;
    font-size: 1.2rem;
    color: #2d2d2d;
  }

  .classContainer {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    padding: 1rem;

    .classContainer {
      flex-flow: column;
    }
  }
`;

export const PlayerContainer = styled.div`
  padding: 1rem;
  width: 55%;
  min-height: 510px;
  max-height: 600px;
  background: #fff;
  border-radius: 0.5rem;

  > iframe {
    height: 75%;
  }

  > span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h1 {
      font-size: 2rem;
      max-width: 50%;
    }

    > p {
      margin: 0;
    }

    > span {
      > button {
        > svg {
          margin-left: 0.5rem;
        }
      }
    }

    button {
      border: 0;
      background: transparent;
      font-size: 1rem;

      svg {
        margin-left: 0.5rem;
        cursor: pointer;
      }
    }
    svg {
      margin-left: 0.5rem;
      cursor: pointer;
    }
    .downloadMaterial {
      color: #803888;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    min-height: auto;

    > iframe {
      height: 360px;
    }

    > span {
      > h1 {
        font-size: 1rem;
      }

      > button {
        font-size: 0.75rem;
      }
    }
  }
`;

export const ClassesSelectionContainer = styled.div`
  padding: 1rem;
  width: 40%;
  background: #fff;
  border-radius: 0.5rem;

  > h1 {
    font-size: 2rem;
    font-family: "Mulish";
    font-weight: 700;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 1rem;

    > h1 {
      font-size: 1rem;
    }
  }
`;

export const NoteContainer = styled.div`
  margin-top: 1rem;

  > h1 {
    font-family: "Mulish";
    font-size: 1rem;
    font-weight: 700;
    color: #11142d;

    margin-left: 1rem;
  }

  > input {
    background: #fff;
    border: 0;
    border-radius: 0.5rem;
    padding: 1rem 1.25rem;

    width: 40%;

    font-size: "Mulish";
  }

  @media (max-width: 500px) {
    > input {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  border: 0;
  width: 100%;
  background: transparent;

  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;

  color: #9a9ab0;
  font-family: "Mulish";
  font-size: 0.9rem;

  > p {
    > svg {
      margin-right: 0.5rem;
    }
    margin: 0;
  }

  &:active {
    margin-top: 0.2rem;
  }
`;
