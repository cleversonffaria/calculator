import React, { useEffect, useState } from "react";
import { Container, Calculator } from "./styles";

function Calc() {
  const [result, setResult] = useState("");

  return (
    <Container>
      <Calculator>
        <input type="text" />
      </Calculator>
    </Container>
  );
}

export default Calc;
