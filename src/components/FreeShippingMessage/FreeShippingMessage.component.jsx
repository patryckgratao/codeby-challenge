import React from 'react';
import {
  Container,
  MessageContainer,
  Text
} from './FreeShippingMessage.styles'

const FreeShippingMessage = () => {
  return (
    <>
      <Container>
        <MessageContainer>
          <Text>Parabéns, sua compra tem frete grátis!</Text>
        </MessageContainer>
      </Container>
    </>
  )
}

export default FreeShippingMessage;