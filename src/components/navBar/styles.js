import styled from "styled-components";

import { Button } from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(
    270deg,
    #1e98d4 20.3%,
    rgba(128, 56, 136, 0.83) 100.4%
  );

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  .navigationContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;

    margin: 0 auto;
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
