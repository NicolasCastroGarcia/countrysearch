import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FlagImg = styled.svg`
background: ${props => `url("${props.background}")`} no-repeat center;
background-size: contain;
width: 100%;
height:auto;
margin: 1em 5em 0em 5em;}`;

export const Card = styled.div`
width: 100%;
height:auto;
color: ${props => props.theme.color};
margin: 1em 5em 0em 5em;
display: flex;
flex-direction: column;

p {
    font-size: 0.9em;
    margin: 0.5em;
}
}`;

export const Title = styled.h1`
color: ${props => props.theme.color};
font-weight: bold;


}`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
height:auto;
}`;

export const Info = styled.div`
display: flex;
flex-direction: row;
justify-content: ${props =>
  props.loading === "loading" ? "center" : "space-between"};
}`;

export const BackLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  color: ${props => props.theme.color};
  &:hover {
    color: ${props => props.theme.color};
  }
  &.selected {
    color: ${props => props.theme.color};
  }
`;

export const BorderLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  color: ${props => props.theme.color};
  &:hover {
    color: ${props => props.theme.color};
  }
  &.selected {
    color: ${props => props.theme.color};
  }
`;
