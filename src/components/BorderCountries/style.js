import styled from "styled-components";

export const Countries = styled.button`
color: ${props => props.theme.color};
background-color: ${props => props.theme.elementColor};
margin: 1em;
padding: 0.8em;
box-shadow: ${props => props.theme.boxShadow};
width: 25%;
border: none;
font-weight: bold;
cursor:pointer;
}`;
