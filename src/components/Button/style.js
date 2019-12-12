import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BackButton = styled.button`
color: ${props => props.theme.color};
background-color: ${props => props.theme.elementColor};
margin: 1em;
padding: 1em;
box-shadow: ${props => props.theme.boxShadow};
width: 10%;
border: none;
font-weight: bold;
cursor:pointer;
}`;

export const Back = styled(NavLink)`
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
