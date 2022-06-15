import styled from "styled-components";

import { Button  } from "@material-ui/core";

export const Container = styled.div`
  width: 100vw;
  padding: 1.75rem;
  background: #1e98d4;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  > div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
`;

export const TextNavBar = styled.div`
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 1.5rem;
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
    font-size: 1.5rem;
    font-family: 'Roboto Condensed';
    font-weight: 700;

    margin-right: 1rem;
  }

  
`

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
`