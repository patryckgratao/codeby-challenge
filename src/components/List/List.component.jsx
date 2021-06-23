import React from "react";

import {
  Container,
  Item,
  ImageContainer,
  DetailsContainer,
  ChocoName,
  OriginalPrice,
  NewPrice,
} from "./List.styles";

const List = ({ items }) => {
  let itemsFormatted;
  if (items) {
    itemsFormatted = items?.map((item) => (
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
  } else {
    itemsFormatted = "Nenhum item registrado.";
  }

  return <Container>{itemsFormatted}</Container>;
};

export default List;
