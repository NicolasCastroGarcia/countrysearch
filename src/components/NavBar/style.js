import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  width: 100%;
  text-align: left;
  padding-left: 5em;
  color: ${props => props.theme.color};
`;

export const Wrapper = styled.div`
  background-color: ${props => props.theme.elementColor};
  color: ${props => props.theme.color};
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const Text = styled.p`
padding-right: 5em;
}
`;

export const ThemeChanger = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}`;
