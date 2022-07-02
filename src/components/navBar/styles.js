import styled from "styled-components";

import { Button } from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
  padding: 1rem 4rem;
  background: linear-gradient(
    270deg,
    #1e98d4 20.3%,
    rgba(128, 56, 136, 0.83) 100.4%
  );

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
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

export const TextNavBar = styled.div`
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 1rem;
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
    font-size: 1rem;
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

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;

  > button {
    background: transparent;
    border: 0;
    color: #fff;
    font-size: 1rem;
    font-family: "Roboto Condensed";
    padding: 0.5rem 1rem;
    font-weight: 700;

    & + button {
      margin-left: 2rem;
    }
  }

  .register {
    border-radius: 2rem;
    background: rgba(0, 0, 0, 0.1);
  }
`;
