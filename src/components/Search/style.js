import styled from "styled-components";

export const SearchBar = styled.div`
  background-color: ${props => props.theme.elementColor};
  border-radius: 5px;
  height: 2.5em;
  width: 20em;
  box-shadow: ${props => props.theme.boxShadow};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.input`
  padding: 0em 1em 0em 1em;
  width: 80%;
  height: 100%;
  font-size: 0.8em;
  background-color: ${props => props.theme.elementColor};
  border: none;
  color: ${props => props.theme.color};
  &::-webkit-input-placeholder {
    color: ${props => props.theme.color};
  }
  &:focus {
    outline: none;
    border: none;
  }
`;

export const Wrapper = styled.div`
  padding: 2em;
`;
