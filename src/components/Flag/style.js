import styled from "styled-components";

export const Card = styled.div`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.elementColor};
  width: 20%;
  margin: 1em;
  border-radius: 5px;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
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
