import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "src/pages/home";

describe("Calculadora", () => {
  it("deve verificar se existe resultado no display", async () => {
    const { getByText, getByTestId, debug } = render(<App />);

    fireEvent.click(getByText("Estou Aqui"));

    expect(getByTestId("calcId")).toContainElement(getByText("Result"));
  });
});
