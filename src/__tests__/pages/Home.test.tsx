import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";

import { Router } from "react-router-dom";

import Home from "src/pages/home";

describe("Inicio", () => {
  it("deve redirecionar o usuário para primeira calculadora", () => {
    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Home />
      </Router>
    );

    expect(history.location.pathname).toBe("/");
    expect(getByTestId("buttonCalcOne")).toBeInTheDocument();

    fireEvent.click(getByTestId("buttonCalcOne"));

    expect(history.location.pathname).toBe("/calculator-one");
  });

  it("deve redirecionar o usuário para segunda calculadora", () => {
    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Home />
      </Router>
    );

    expect(history.location.pathname).toBe("/");
    expect(getByTestId("buttonCalcTwo")).toBeInTheDocument();

    fireEvent.click(getByTestId("buttonCalcTwo"));

    expect(history.location.pathname).toBe("/calculator-two");
  });
});
