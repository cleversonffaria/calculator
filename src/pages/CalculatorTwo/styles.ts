import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Calculator = styled.div`
  background-color: #202020;
  border-radius: 5px;
  overflow: hidden;
  width: 350px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.5);
  padding: 10px 5px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  width: 350px;
`;

export const Title = styled.h2`
  color: #134369;
  font-size: 30px;
  margin-left: 10px;
`;

export const BackButton = styled(Link)`
  font-weight: bold;
  text-transform: uppercase;

  color: #fff;
  background: #d76b00;
  text-decoration: none;
  padding: 20px;
  height: 10px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
