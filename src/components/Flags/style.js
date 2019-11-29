import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.color};
`;

export const Filters = styled.div`
display: flex;
flex-flow: row;
align-items: center;
width: 100%;
justify-content: space-between;
}`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
