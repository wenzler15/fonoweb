import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem;
  background: #e5e5e5;

  .analyticsContainer {
    display: flex;
    justify-content: space-evenly;

    > div {
      display: flex;
      align-items: center;
      min-width: 25%;

      background: #fff;
      padding: 1rem 2rem;
      border-radius: 1rem;

      > svg {
        height: 4rem;
        width: 6rem;

        padding: 1rem;
        border-radius: 1rem;
      }

      > span {
        width: 100%;
        margin-left: 1rem;

        > strong {
          font-family: "Mulish";
          font-size: 2rem;
          color: #06152b;
        }

        > p {
          color: #809fb8;
        }
      }
    }
  }
`;

export const AnalyticsLabel = styled.p`
  color: ${({ positive }) => (positive ? "#1ad598" : "#EA3A3D")};
  align-self: flex-end;
`;

export const ChartContainer = styled.div`
  background: #fff;
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1 {
      font-size: 1.5rem;
    }

    > input {
      padding: 1rem;
    }
  }
`;
