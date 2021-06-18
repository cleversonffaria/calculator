import styled from "styled-components";

interface PropsWrapperButton {
  operador?: boolean;
  backgroundColor?: string;
}

export const WrapperButton = styled.button<PropsWrapperButton>`
  font-family:sans-serif;
  background: ${({ operador, backgroundColor }) => backgroundColor || (!operador ? "#060606" : "#121212")};
  width: calc(100% / 4.2);
  height:50px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  display:flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  margin:2px;
  outline: none;
  border:none;
`;
