import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BackButton = styled.button.attrs(props => ({
  style: {
    color: props.theme.color,
    backgroundColor: props.theme.elementColor,
    boxShadow: props.theme.boxShadow
  }
}))`
margin: 1em;
padding: 1em;
width: 10%;
border: none;
font-weight: bold;
cursor:pointer;
border-radius: 5px;
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
