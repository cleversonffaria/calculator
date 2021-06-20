import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CalculatorOne from "src/pages/CalculatorOne";

describe("Primeira Calculadora", () => {
  it("deve apresentar os botões em ordem", () => {
    render(
      <Router>
        <CalculatorOne />
      </Router>
    );

    expect(screen.getAllByTestId("buttonCalc")[0]).toHaveTextContent("Limpar");
    expect(screen.getAllByTestId("buttonCalc")[1]).toHaveTextContent("C");
    expect(screen.getAllByTestId("buttonCalc")[2]).toHaveTextContent(".");
    expect(screen.getAllByTestId("buttonCalc")[3]).toHaveTextContent("/");
    expect(screen.getAllByTestId("buttonCalc")[4]).toHaveTextContent("7");
    expect(screen.getAllByTestId("buttonCalc")[5]).toHaveTextContent("8");
    expect(screen.getAllByTestId("buttonCalc")[6]).toHaveTextContent("9");
    expect(screen.getAllByTestId("buttonCalc")[7]).toHaveTextContent("*");
    expect(screen.getAllByTestId("buttonCalc")[8]).toHaveTextContent("4");
    expect(screen.getAllByTestId("buttonCalc")[9]).toHaveTextContent("5");
    expect(screen.getAllByTestId("buttonCalc")[10]).toHaveTextContent("6");
    expect(screen.getAllByTestId("buttonCalc")[11]).toHaveTextContent("-");
    expect(screen.getAllByTestId("buttonCalc")[12]).toHaveTextContent("1");
    expect(screen.getAllByTestId("buttonCalc")[13]).toHaveTextContent("2");
    expect(screen.getAllByTestId("buttonCalc")[14]).toHaveTextContent("3");
    expect(screen.getAllByTestId("buttonCalc")[15]).toHaveTextContent("+");
    expect(screen.getAllByTestId("buttonCalc")[16]).toHaveTextContent("");
    expect(screen.getAllByTestId("buttonCalc")[17]).toHaveTextContent("0");
    expect(screen.getAllByTestId("buttonCalc")[18]).toHaveTextContent("");
    expect(screen.getAllByTestId("buttonCalc")[19]).toHaveTextContent("=");
  });

  it("deve conter vinte botões na calculadora", () => {
    const { getAllByTestId } = render(
      <Router>
        <CalculatorOne />
      </Router>
    );

    expect(getAllByTestId("buttonCalc").length.toString()).toMatch("20");
  });

  it("deve existir todos números", () => {
    const { getByText } = render(
      <Router>
        <CalculatorOne />
      </Router>
    );
    for (var i = 0; i < 9; i++) {
      expect(getByText(i.toString())).toHaveValue(i.toString());
    }
  });

  it("deve conter todos operadores necessários ", () => {
    const { getByText } = render(
      <Router>
        <CalculatorOne />
      </Router>
    );

    const operators = ["=", "+", "-", "*", "/", ".", "C", "Limpar"];
    operators.map((op) => {
      expect(getByText(op.toString())).toHaveValue(op.toString());
    });
  });

  it("deve realizar subtrações", () => {
    const { getByText, getByTestId } = render(
      <Router>
        <CalculatorOne />
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
        <CalculatorOne />
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
        <CalculatorOne />
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
        <CalculatorOne />
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
        <CalculatorOne />
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
        <CalculatorOne />
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
        <CalculatorOne />
      </Router>
    );

    expect(getByTestId("resultCalc")).toHaveValue("0");

    fireEvent.click(getByText("1"));

    expect(getByTestId("resultCalc")).toHaveValue("1");
  });

  it("deve exibir resultado do calculo", () => {
    const { getByText, getByTestId } = render(
      <Router>
        <CalculatorOne />
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
        <CalculatorOne />
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
