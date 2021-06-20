import { render } from "@testing-library/react";

import { Display } from "src/components"

describe("Display", () => {

  // Deve verificar se as informações do display existe.
  it("should check if there is information on the display", () => {
    const { getByTestId } = render(<Display result="1" value="0" />)

    expect(getByTestId("operatorCalc")).toHaveDisplayValue("1")
    expect(getByTestId("resultCalc")).toHaveDisplayValue("0")

  });
});
