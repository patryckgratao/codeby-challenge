import React from "react";
import { ButtonContainer, ButtonText } from "./Button.styles";

const Button = ({ text, color }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Mandou enviar");
  };

  return (
    <ButtonContainer
      type="button"
      as="button"
      onClick={handleClick}
      color={color}
    >
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
