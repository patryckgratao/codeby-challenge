import React from "react";

import Modal from '../../components/Modal/Modal.component';
import Button from "../../components/Button/Button.component";
import FreeShippingMessage from "../../components/FreeShippingMessage/FreeShippingMessage.component";

import {
  Container,
  List,
  Item,
  ImageContainer,
  DetailsContainer,
  ChocoName,
  OriginalPrice,
  NewPrice,
  TotalContainer,
  ButtonContainer
} from "./Cart.styles";

const Cart = () => {
  return (
    <Container>
      <Modal>
        <h3>Meu carrinho</h3>
        <List>
          <Item>
            <ImageContainer>
              <img src="http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000" />
            </ImageContainer>

            <DetailsContainer>
              <ChocoName>Trufa de Morango</ChocoName>
              <OriginalPrice>R$ 123</OriginalPrice>
              <NewPrice>R$ 1,11</NewPrice>
            </DetailsContainer>
          </Item>

          <Item>
            <ImageContainer>
              <img src="" />
            </ImageContainer>

            <DetailsContainer>
              <ChocoName>Trufa de Morango gostosonq daksdkasd</ChocoName>
              <OriginalPrice>R$ 123</OriginalPrice>
              <NewPrice>R$ 1,11</NewPrice>
            </DetailsContainer>
          </Item>

          <Item>
            <ImageContainer>
              <img src="" />
            </ImageContainer>

            <DetailsContainer>
              <ChocoName>Trufa de Morango</ChocoName>
              <OriginalPrice>R$ 123</OriginalPrice>
              <NewPrice>R$ 1,11</NewPrice>
            </DetailsContainer>
          </Item>
          
        </List>

        <TotalContainer>
          <span>Total</span>
          <span>R$ 13,31</span>
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
