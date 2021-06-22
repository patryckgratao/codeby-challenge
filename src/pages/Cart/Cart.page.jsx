import React from "react";
import Button from '../../components/Button/Button.component';
import FreeShippingMessage from '../../components/FreeShippingMessage/FreeShippingMessage.component';

import {
  Container,
  Modal,
  

} from './Cart.styles'

const Cart = () => {
  return (
    <Container>
      <Modal>
        <span>Meu Carrinho</span>

        <FreeShippingMessage />
        <Button text="Finalizar Compra" />
      </Modal>
    </Container>
  );
};

export default Cart;
