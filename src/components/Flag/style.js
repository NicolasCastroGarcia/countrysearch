import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Card = styled.div`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.elementColor};
  margin: 1em;
  border-radius: 5px;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const Title = styled.h1`
font-size: 1em;
padding: 1em 0em 0em 0em;
text-align: center;
}`;

export const Info = styled.p`
font-size: 0.8em;
text-align:center;

}`;

export const FlagImg = styled.svg`
background: ${props => `url("${props.background}")`} no-repeat center;
background-size: cover;
width: 100%;
border-top-left-radius: 5px ;
border-top-right-radius: 5px ;
}`;

export const Sar = styled(NavLink)`
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
