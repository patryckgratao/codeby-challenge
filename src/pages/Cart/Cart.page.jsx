import React from "react";
import { useLocation } from "react-router-dom";

import Modal from "../../components/Modal/Modal.component";
import List from "../../components/List/List.component";
import TotalAmount from "../../components/TotalAmount/TotalAmount.component";
import FreeShippingMessage from "../../components/FreeShippingMessage/FreeShippingMessage.component";
import Button from "../../components/Button/Button.component";
import { Container } from "./Cart.styles";

const Cart = () => {
  const location = useLocation();
  const data = location?.state?.data;

  const { items, totalizers } = data;
  const totalOriginalPrice = totalizers && Math.abs(totalizers[0]?.value);
  const totalDiscounts = totalizers && Math.abs(totalizers[1]?.value);

  const totalAmount =
    totalDiscounts && totalOriginalPrice
      ? parseFloat(totalOriginalPrice - totalDiscounts).toFixed(2)
      : 0;

  const showFreeShippingMessage =
    totalAmount && totalAmount > 10 ? <FreeShippingMessage /> : "";

  return (
    <Container>
      <Modal>
        <h3>Meu carrinho</h3>
        <List items={items} />
        <TotalAmount amount={totalAmount} />
        {showFreeShippingMessage}
        <Button text="Finalizar Compra" />
      </Modal>
    </Container>
  );
};

export default Cart;
