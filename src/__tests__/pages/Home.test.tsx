import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";

import { BrowserRouter as Router } from "react-router-dom";

import Home from "src/pages/home";

describe("Calculadora", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it("deve conter dois link de redirecionamento", () => {
    const history = createMemoryHistory();

    const { container } = render(
      <Router>
        <Home />
      </Router>
    );

    expect(history.location.pathname).toBe("/");

    expect(container.innerHTML).toMatch("/calculator-one");
    expect(container.innerHTML).toMatch("/calculator-two");
  });
});
