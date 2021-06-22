import React from "react";
import Button from '../../components/Button/Button.component';
import FreeShippingMessage from '../../components/FreeShippingMessage/FreeShippingMessage.component';

const Cart = () => {
  return (
    <>
      <h1>Cart</h1>
      <Button text="Finalizar Compra" />
      <FreeShippingMessage />
    </>
  );
};

export default Cart;
