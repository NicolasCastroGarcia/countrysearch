import styled from "styled-components";

export const Countries = styled.button.attrs(props => ({
  style: {
    color: props.theme.color,
    backgroundColor: props.theme.elementColor,
    boxShadow: props.theme.boxShadow
  }
}))`
  margin: 1em;
  padding: 0.8em;
  width: 25%;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
