import React, { useEffect, useState } from "react";
import { Container, Calculator } from "./styles";

function Calc() {
  const [result, setResult] = useState("");

  return (
    <Container>
      <Calculator>
        <input
          data-testid="resultDisplay"
          type="text"
          onChange={(e) => setResult(e.target.value)}
        />

        {result}
      </Calculator>
    </Container>
  );
}

export default Calc;
