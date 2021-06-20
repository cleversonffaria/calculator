import React, { useState } from "react";
import { Button, Display } from "src/components";

import { Container, Calculator, Header, Title, BackButton } from "./styles";

function CalculatorOne() {
  const [result, setResult] = useState("");
  const [resultCalc, setResultCalc] = useState("");

  //#region Ações do botão
  const handleClick = (e: any) => {
    e.preventDefault();

    const lastR = result.split("")[result.length - 1];

    if (
      (lastR === e.target.value && !!e.target.value.match(/\D/g)) ||
      (!!lastR?.match(/\D/g) && !!e.target.value.match(/\D/g))
    ) {
      if (lastR !== e.target.value) {
        setResult(result.slice(0, result.length - 1).concat(e.target.value));
      }
      return;
    } else if (
      lastR === "0" &&
      result.split("")[result.length - 2]?.match(/\D/g)
    ) {
      setResult(result.slice(0, result.length - 1).concat(e.target.value));
      return;
    } else if (!lastR && e.target.value === "0") {
      return;
    }
    setResult(result.concat(e.target.value));
  };

  //#endregion

  //#region Limpar Display

  const clear = () => {
    setResult("");
    setResultCalc("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  //#endregion

  //#region Realizar Operação

  const calculate = () => {
    const lastR = result.split("")[result.length - 1];

    try {
      if (!!lastR?.match(/\D/g)) {
      
        setResultCalc(
          eval(
             eval(result.slice(0, result.length - 1)).toString() +
              lastR +
              Math.abs(eval(result.slice(0, result.length - 1)).toString())
          ).toString()
        );

        setResult(
          eval(result.slice(0, result.length - 1)).toString() +
              lastR +
              Math.abs(eval(result.slice(0, result.length - 1)).toString())
        );

        return;
      } else if (
        eval(result).toString() === "-Infinity" ||
        eval(result).toString() === "Infinity"
      ) {
        setResultCalc("Não é possível dividir por zero");
        setResult("");
        return;
      }

      setResultCalc(eval(result).toString());
    } catch (error) {
      setResultCalc("Não foi possível calcular");
      setResult("");
    }
  };

  //#endregion

  return (
    <Container>
      <Header>
        <BackButton to="/">Voltar</BackButton>
        <Title>Calculator One</Title>
      </Header>
      <Calculator>
        <Display result={resultCalc} value={result || 0} />

        <Button onClick={clear} value="Limpar" operador />
        <Button onClick={backspace} value="C" operador />
        <Button onClick={handleClick} value="." operador />
        <Button onClick={handleClick} value="/" operador />

        <Button onClick={handleClick} value="7" />
        <Button onClick={handleClick} value="8" />
        <Button onClick={handleClick} value="9" />
        <Button onClick={handleClick} value="*" operador />

        <Button onClick={handleClick} value="4" />
        <Button onClick={handleClick} value="5" />
        <Button onClick={handleClick} value="6" />
        <Button onClick={handleClick} value="-" operador />

        <Button onClick={handleClick} value="1" />
        <Button onClick={handleClick} value="2" />
        <Button onClick={handleClick} value="3" />
        <Button onClick={handleClick} value="+" operador />

        <Button onClick={handleClick} value="" operador />
        <Button onClick={handleClick} value={0} />
        <Button onClick={handleClick} value="" operador />

        <Button
          onClick={calculate}
          value="="
          operador
          backgroundColor="#134369"
        />
      </Calculator>
    </Container>
  );
}

export default CalculatorOne;
