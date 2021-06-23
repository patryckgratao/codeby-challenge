import React from "react";

import {
  Container,
  Item,
  ImageContainer,
  DetailsContainer,
  ChocoName,
  OriginalPrice,
  NewPrice,
  ErrorMessage,
} from "./List.styles";

const List = ({ items }) => {
  if (!items) {
    return <ErrorMessage>Nenhum item registrado.</ErrorMessage>;
  }

  const itemsFormatted = items?.map((item) => (
    <Item key={item.id}>
      <ImageContainer>
        <img src={item.imageUrl} alt={item.name} />
      </ImageContainer>

      <DetailsContainer>
        <ChocoName>{item.name}</ChocoName>
        <OriginalPrice>R$ {item.price}</OriginalPrice>
        <NewPrice>R$ {item.sellingPrice}</NewPrice>
      </DetailsContainer>
    </Item>
  ));
  return <Container>{itemsFormatted}</Container>;
};

export default List;
