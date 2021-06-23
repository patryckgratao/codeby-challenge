import React from "react";
import { Container } from "./TotalAmount.styles";

const TotalAmount = ({ amount }) => {
  return (
    <Container>
      <span>Total</span>
      <span>R$ {amount}</span>
    </Container>
  );
};

export default TotalAmount;
