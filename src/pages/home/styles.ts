import { Link } from "react-router-dom";
import styled from "styled-components";

interface PropsLinkButton {
  bgcolor?: string;
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: #202020;
  font-size: 30px;
`;

export const LinkButton = styled(Link) <PropsLinkButton>`
  color: #fff;
  text-decoration: none;
  padding: 20px;
  border-radius: 10px;
  background: ${({ bgcolor }) => bgcolor || "#134369"};
  text-transform: uppercase;

  margin: 20px 10px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
