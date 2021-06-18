import React from "react";

import { Container, Title, LinkButton, WrapperButtons } from "./styles";

function Home() {
  return (
    <Container>
      <Title>Olá, seja bem vindo ao calculator.</Title>

      <WrapperButtons>
        <LinkButton data-testid="buttonCalcOne" to="/calculator-one">
          Calculator One
        </LinkButton>
        <LinkButton
          data-testid="buttonCalcTwo"
          bgcolor="#333"
          to="/calculator-two"
        >
          Calculator Two
        </LinkButton>
      </WrapperButtons>
    </Container>
  );
}

export default Home;
