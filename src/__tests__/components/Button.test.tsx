import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "src/components";

describe("Botões", () => {
  // deve ser clicavel
  it("deve ser clicavel", () => {
    const { getByTestId } = render(<Button onClick={() => { }} />);

    fireEvent.click(getByTestId("buttonCalc"), { target: { value: "2" } })

    expect(getByTestId("buttonCalc")).toHaveValue()

  });

  // deve conter algum valor
  it("deve conter algum valor", () => {
    const { getByText } = render(<Button value="2" />);

    expect(getByText("2")).toBeInTheDocument()
  });
});
