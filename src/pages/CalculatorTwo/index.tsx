import React, { Component } from "react";
import { Button, Display } from "src/components";

import { Container, Calculator, Header, Title, BackButton } from "./styles";

export default class CalculatorTwo extends Component {
  state = {
    result: "",
    resultCalc: "",
  };

  handleClick = (e: any) => {

    e.preventDefault();

    const lastR = this.state.result.split("")[this.state.result.length - 1];

    if (
      (lastR === e.target.value && !!e.target.value.match(/\D/g)) ||
      (!!lastR?.match(/\D/g) && !!e.target.value.match(/\D/g))
    ) {
      if (lastR !== e.target.value) {
        this.setState({
          ...this.state,
          result: this.state.result.slice(0, this.state.result.length - 1).concat(e.target.value),
        });
      }
      return;
    } else if (
      lastR === "0" &&
      this.state.result.split("")[this.state.result.length - 2]?.match(/\D/g)
      ) {
      this.setState({
        ...this.state,
        result: this.state.result.slice(0, this.state.result.length - 1).concat(e.target.value),
      });
      return;
    } else if (!lastR && e.target.value === "0") {
      return;
    }
    this.setState({
      ...this.state,
      result: this.state.result.concat(e.target.value),
    });
  };

  clear = () => {
    this.setState({ result: "", resultCalc: "" });
  };

  backspace = () => {
    this.setState({
      ...this.state,
      result: this.state.result.slice(0, this.state.result.length - 1),
    });
  };

  calculate = () => {
    const lastR = this.state.result.split("")[this.state.result.length - 1];

    try {
      if (!!lastR?.match(/\D/g)) {
        this.setState({
          result:
            eval(
              this.state.result.slice(0, this.state.result.length - 1)
            ).toString() +
            lastR +
            eval(
              this.state.result.slice(0, this.state.result.length - 1)
            ).toString(),

          resultCalc: eval(
            eval(
              this.state.result.slice(0, this.state.result.length - 1)
            ).toString() +
              lastR +
              eval(
                this.state.result.slice(0, this.state.result.length - 1)
              ).toString()
          ).toString(),
        });

        return;
      } else if (
        eval(this.state.result).toString() === "-Infinity" ||
        eval(this.state.result).toString() === "Infinity"
      ) {
        this.setState({
          result: "",
          resultCalc: "Não é possível dividir por zero",
        });
        return;
      }
      this.setState({
        ...this.state,
        resultCalc: eval(this.state.result).toString(),
      });
    } catch (error) {
      this.setState({
        result: "",
        resultCalc: "Não foi possível calcular",
      });
    }
  };

  render() {
    return (
      <Container>
        <Header>
          <BackButton to="/">Voltar</BackButton>
          <Title>Calculator Two</Title>
        </Header>
        <Calculator>
          <Display
            result={this.state.resultCalc}
            value={this.state.result || 0}
          />

          <Button onClick={this.clear} value="Limpar" operador />
          <Button onClick={this.backspace} value="C" operador />
          <Button onClick={this.handleClick} value="." operador />
          <Button onClick={this.handleClick} value="/" operador />

          <Button onClick={this.handleClick} value="7" />
          <Button onClick={this.handleClick} value="8" />
          <Button onClick={this.handleClick} value="9" />
          <Button onClick={this.handleClick} value="*" operador />

          <Button onClick={this.handleClick} value="4" />
          <Button onClick={this.handleClick} value="5" />
          <Button onClick={this.handleClick} value="6" />
          <Button onClick={this.handleClick} value="-" operador />

          <Button onClick={this.handleClick} value="1" />
          <Button onClick={this.handleClick} value="2" />
          <Button onClick={this.handleClick} value="3" />
          <Button onClick={this.handleClick} value="+" operador />

          <Button onClick={this.handleClick} value="" operador />
          <Button onClick={this.handleClick} value={0} />
          <Button onClick={this.handleClick} value="" operador />

          <Button
            onClick={this.calculate}
            value="="
            operador
            backgroundColor="#d76b00"
          />
        </Calculator>
      </Container>
    );
  }
}
