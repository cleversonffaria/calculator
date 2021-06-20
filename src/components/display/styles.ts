import styled from "styled-components";

interface PropsInput {
  displayTop?: boolean
}

export const Input = styled.input<PropsInput>`
  width: 97%;
  background-color: transparent;
  border:none;
  outline:none;
  text-align: right;
  color:#fff;
  font-size:${({ displayTop }) => displayTop ? "22px" : "26px"};
  caret-color: transparent;
`;
