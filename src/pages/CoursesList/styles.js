import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 4rem 8rem;
  background: #e5e5e5;

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

  @media (max-width: 500px) {
    padding: 2rem;
  }
`;

export const FilterCoursesContainer = styled.div`
  display: flex;
`;

export const CustomButton = styled.button`
  border: 0;
  background: transparent;

  font-size: 1rem;
  color: ${({ isActive }) => (!!isActive ? `#11142d` : `#92929d`)};
  font-weight: 700;

  & + button {
    margin-left: 1rem;
  }
`;

export const CourseContainer = styled.div`
  background: #fff;
  padding: 1.5rem 1rem;
  margin-top: 1rem;

  border-radius: 0.5rem;

  display: flex;
  flex-flow: row;
  justify-content: space-between;

  > img {
    width: 20%;
    height: 100%;
  }

  > div {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;

    margin-left: 4rem;
    width: 100%;

    > span {
      > h1 {
        font-family: "Mulish";
        color: #11142d;
        font-size: 1.5rem;
        font-weight: 700;
      }

      > p {
        font-family: "Mulish";
        color: #92929d;
        font-size: 1rem;
      }
    }

    > div {
      > h3 {
        color: #11142d;
        font-weight: 700;
        font-size: 0.75rem;
      }
    }
  }

  > button {
    align-self: flex-end;

    text-transform: capitalize;
    background: #803888;
    color: #fff;
    font-weight: 600;
    min-width: 100px;
    border-radius: 0.5rem;

    padding: 0.5rem;
  }

  .courseCompletionBar {
    width: 50%;
  }

  @media (max-width: 500px) {
    flex-flow: column;

    > img {
      width: 100%;
    }

    > div {
      margin: 0;
      margin-top: 1rem;

      > span {
        > h1 {
          font-size: 1rem;
        }
        > p {
          font-size: 0.75rem;
        }
      }
    }

    > button {
      width: 100%;
      margin-top: 1rem;
    }

    .courseCompletionBar {
      width: 100%;
    }
  }
`;
