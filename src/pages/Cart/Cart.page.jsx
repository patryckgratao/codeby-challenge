import React, { useState, useEffect } from "react";
import { getListUnderTen } from "../../services/shopping";

import Modal from "../../components/Modal/Modal.component";
import List from "../../components/List/List.component";

import FreeShippingMessage from "../../components/FreeShippingMessage/FreeShippingMessage.component";
import Button from "../../components/Button/Button.component";

import { Container, TotalContainer, ButtonContainer } from "./Cart.styles";

const Cart = () => {
  const [dataFromServer, setDataFromServer] = useState({});
  const { items, totalizers } = dataFromServer;
  const totalOriginalPrice = totalizers && Math.abs(totalizers[0]?.value);
  const totalDiscounts = totalizers && Math.abs(totalizers[1]?.value);

  const totalAmount =
    totalDiscounts && totalOriginalPrice
      ? totalOriginalPrice - totalDiscounts
      : 0;

      console.log(items)

  useEffect(() => {
    async function fetchListUnderTen() {
      try {
        const result = await getListUnderTen();
        setDataFromServer(result);
      } catch (error) {
        console.log("error => ", error);
      }
    }

    fetchListUnderTen();
  }, []);

  return (
    <Container>
      <Modal>
        <h3>Meu carrinho</h3>
        <List items={items} />

        <TotalContainer>
          <span>Total</span>
          <span>R$ {totalAmount}</span>
        </TotalContainer>


        <FreeShippingMessage />
        <ButtonContainer>
          <Button text="Finalizar Compra" />
        </ButtonContainer>
      </Modal>
    </Container>
  );
};

export default Cart;
