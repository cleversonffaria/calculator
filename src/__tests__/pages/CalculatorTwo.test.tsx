import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CalculatorTwo from "src/pages/CalculatorTwo";

describe("Segunda Calculadora", () => {
  it("deve realizar subtrações", () => {
    const { getByText, getByTestId } = render(
      <Router>
        <CalculatorTwo />
      </Router>
    );

    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("-"));
    fireEvent.click(getByText("2"));

    expect(getByTestId("resultCalc")).toHaveValue("1-2");

    fireEvent.click(getByText("="));

    expect(getByTestId("operatorCalc")).toHaveValue("-1");
  });

  it("deve realizar somas", () => {
    const { getByText, getByTestId } = render(
      <Router>
        <CalculatorTwo />
      </Router>
    );

    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));

    expect(getByTestId("resultCalc")).toHaveValue("1+2");

    fireEvent.click(getByText("="));

    expect(getByTestId("operatorCalc")).toHaveValue("3");
  });

  it("deve realizar divisões", () => {
    const { getByText, getByTestId } = render(
      <Router>
        <CalculatorTwo />
      </Router>
    );

    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("/"));
    fireEvent.click(getByText("2"));

    expect(getByTestId("resultCalc")).toHaveValue("1/2");

    fireEvent.click(getByText("="));

    expect(getByTestId("operatorCalc")).toHaveValue("0.5");
  });

  
  it("deve realizar multiplações", () => {
    const { getByText, getByTestId } = render(
      <Router>
        <CalculatorTwo />
      </Router>
    );

    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("*"));
    fireEvent.click(getByText("2"));

    expect(getByTestId("resultCalc")).toHaveValue("1*2");

    fireEvent.click(getByText("="));

    expect(getByTestId("operatorCalc")).toHaveValue("2");
  });

  it("deve limpar tela", () => {
    const { getByTestId, getByText } = render(
      <Router>
        <CalculatorTwo />
      </Router>
    );

    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("3"));

    expect(getByTestId("resultCalc")).toHaveValue("1+23");

    fireEvent.click(getByText("Limpar"));

    expect(getByTestId("resultCalc")).toHaveValue("0");
  });

  it("deve apagar calculo", () => {
    const { getByTestId, getByText } = render(
      <Router>
        <CalculatorTwo />
      </Router>
    );

    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("3"));

    expect(getByTestId("resultCalc")).toHaveValue("1+23");

    fireEvent.click(getByText("C"));

    expect(getByTestId("resultCalc")).toHaveValue("1+2");
  });

  it("deve exibir calculo", async () => {
    const { getByText, getByTestId } = render(
      <Router>
        <CalculatorTwo />
      </Router>
    );

    expect(getByTestId("resultCalc")).toHaveValue("0");

    fireEvent.click(getByText("1"));

    expect(getByTestId("resultCalc")).toHaveValue("1");
  });

  it("deve exibir resultado do calculo", () => {
    const { getByText, getByTestId } = render(
      <Router>
        <CalculatorTwo />
      </Router>
    );

    expect(getByTestId("operatorCalc")).toHaveValue("");

    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("="));

    expect(getByTestId("resultCalc")).toHaveValue("1+2");

    expect(getByTestId("operatorCalc")).toHaveValue("3");
  });

  it("deve gerar erro", () => {
    render(
      <Router>
        <CalculatorTwo />
      </Router>
    );

    expect(screen.getByTestId("operatorCalc")).toHaveValue("");

    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("/"));
    fireEvent.click(screen.getByText("0"));

    expect(screen.getByTestId("resultCalc")).toHaveValue("1/0");

    fireEvent.click(screen.getByText("="));

    expect(screen.getByTestId("resultCalc")).toHaveValue("0");

    expect(screen.getByTestId("operatorCalc")).toHaveValue("Não é possível dividir por zero");
  });
});
