import React from "react";
import { Container, FullButton, ButtonText } from "./Button.styles";

const Button = ({ text, color }) => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <FullButton
        type="button"
        as="button"
        onClick={handleClick}
        color={color}
      >
        <ButtonText>{text}</ButtonText>
      </FullButton>
    </Container>
  );
};

export default Button;
