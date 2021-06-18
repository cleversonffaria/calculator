import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import Home from "src/pages/home";

describe("Calculadora", () => {
  // deve realizar subtrações
  it("deve realizar subtrações", () => {
    const { getByText, getByTestId } = render(<Home />)

    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("-"))
    fireEvent.click(getByText("2"))

    expect(getByTestId("resultCalc")).toHaveValue("1-2")

    fireEvent.click(getByText("="))

    expect(getByTestId("operatorCalc")).toHaveValue("-1")
  })

  // deve realizar somas
  it("deve realizar somas", () => {
    const { getByText, getByTestId } = render(<Home />)

    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("+"))
    fireEvent.click(getByText("2"))

    expect(getByTestId("resultCalc")).toHaveValue("1+2")

    fireEvent.click(getByText("="))

    expect(getByTestId("operatorCalc")).toHaveValue("3")
  })

  // deve realizar divisões
  it("deve realizar divisões", () => {
    const { getByText, getByTestId } = render(<Home />)

    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("/"))
    fireEvent.click(getByText("2"))

    expect(getByTestId("resultCalc")).toHaveValue("1/2")

    fireEvent.click(getByText("="))

    expect(getByTestId("operatorCalc")).toHaveValue("0.5")
  })

  // deve realizar multiplações
  it("deve realizar multiplações", () => {
    const { getByText, getByTestId } = render(<Home />)

    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("*"))
    fireEvent.click(getByText("2"))

    expect(getByTestId("resultCalc")).toHaveValue("1*2")

    fireEvent.click(getByText("="))

    expect(getByTestId("operatorCalc")).toHaveValue("2")
  })

  // deve limpar tela
  it("deve limpar tela", () => {
    const { getByTestId, getByText } = render(<Home />);

    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("+"))
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("3"))

    expect(getByTestId("resultCalc")).toHaveValue("1+23")

    fireEvent.click(getByText("Limpar"))

    expect(getByTestId("resultCalc")).toHaveValue("0")

  })

  // deve apagar calculo
  it("deve apagar calculo", () => {
    const { getByTestId, getByText } = render(<Home />);

    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("+"))
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("3"))

    expect(getByTestId("resultCalc")).toHaveValue("1+23")

    fireEvent.click(getByText("C"))

    expect(getByTestId("resultCalc")).toHaveValue("1+2")

  })

  // deve exibir calculo
  it("deve exibir calculo", async () => {
    const { getByText, getByTestId } = render(<Home />);

    expect(getByTestId("resultCalc")).toHaveValue("0")

    fireEvent.click(getByText("1"))

    expect(getByTestId("resultCalc")).toHaveValue("1")
  });

  // deve exibir resultado do calculo
  it("deve exibir resultado do calculo", () => {
    const { getByText, getByTestId } = render(<Home />);

    expect(getByTestId("operatorCalc")).toHaveValue("")

    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("+"))
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("="))

    expect(getByTestId("resultCalc")).toHaveValue("1+2")

    expect(getByTestId("operatorCalc")).toHaveValue("3")
  })

  // deve gerar erro
  it("deve gerar erro", () => {
    render(<Home />);

    expect(screen.getByTestId("operatorCalc")).toHaveValue("")

    fireEvent.click(screen.getByText("1"))
    fireEvent.click(screen.getByText("+"))
    fireEvent.click(screen.getByText("("))

    expect(screen.getByTestId("resultCalc")).toHaveValue("1+(")

    fireEvent.click(screen.getByText("="))

    expect(screen.getByTestId("resultCalc")).toHaveValue("0")

    expect(screen.getByTestId("operatorCalc")).toHaveValue("Error")
  })
});
