import React, { InputHTMLAttributes } from "react";

import { Input } from "./styles";

interface PropsDisplay extends InputHTMLAttributes<HTMLInputElement> { result?: string }

const Display: React.FC<PropsDisplay> = ({ result, ...props }) => {
  return (
    <>
      <Input
        data-testid="operatorCalc"
        type="text"
        value={result}
        readOnly
        displayTop
      />

      <Input
        data-testid="resultCalc"
        type="text"
        readOnly
        {...props}
      />
    </>
  )
};

export default Display;
