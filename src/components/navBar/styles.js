import styled from "styled-components";

import { Button } from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
  padding: 1rem 4rem;
  background: #1e98d4;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  > img {
    width: 64px;
    height: 100%;

    margin-right: 3rem;
  }

  .navigationContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

export const TextNavBar = styled.div`
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 1.35rem;
  color: #ffffff;
  cursor: pointer;

  & + div {
    margin-left: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;

    & + div {
      margin-left: 0.5rem;
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
