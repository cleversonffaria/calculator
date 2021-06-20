import React, { ButtonHTMLAttributes } from "react";

import { WrapperButton } from "./styles";

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string | number;
  operador?: boolean;
  backgroundColor?: string
}

const Buttons: React.FC<PropsButton> = ({ value, operador, backgroundColor, ...props }) => {

  return (
    <WrapperButton
      data-testid="buttonCalc"
      backgroundColor={backgroundColor}
      operador={operador}
      value={value}
      {...props}
    >
      {value}
    </WrapperButton>
  );
};

export default Buttons;
