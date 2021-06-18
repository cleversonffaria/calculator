import React, { useState } from "react";
import { Button, Display } from "src/components";

import { Container, Calculator, Title } from "./styles";

function Calc() {

  const [result, setResult] = useState("")
  const [resultCalc, setResultCalc] = useState("")


  const handleClick = (e: any) => {
    e.preventDefault()
    setResult(result.concat(e.target.value))
  }

  const clear = () => {
    setResult("")
    setResultCalc("")
  }

  const backspace = () => {
    setResult(result.slice(0, result.length - 1))
  }

  const calculate = () => {
    try {
      setResultCalc(eval(result).toString())
    } catch (error) {
      setResultCalc("Error")
      setResult("")
    }
  }

  return (
    <Container>
      <Title>
        Calculator One
      </Title>
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

        <Button onClick={handleClick} value="(" operador />
        <Button onClick={handleClick} value={0} />
        <Button onClick={handleClick} value=")" operador />

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

export default Calc;
