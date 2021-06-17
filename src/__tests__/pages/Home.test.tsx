import { render, screen, fireEvent } from "@testing-library/react";
import Home from "src/pages/home";

describe("Calculadora", () => {
  it("deve verificar se existe resultado no display", async () => {
    const { getByText, getByTestId, debug } = render(<Home />);

    fireEvent.change(getByTestId("resultDisplay"), {
      target: { value: 123 },
    });

    expect(screen.getByTestId("resultDisplay")).toBeInTheDocument();
  });
});
