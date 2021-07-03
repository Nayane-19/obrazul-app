import React from 'react';
import { CardContainer, CardBody, CardTitle, CardButton, CardContent, CardImg } from "./CardElements";



function CardItem({product}) {

  return(
    <CardContainer>   
        <CardBody>
      <CardImg src={product.picture}/>
      <CardTitle>{product.name}</CardTitle>
      <CardContent>{product.fullname}</CardContent>
    </CardBody>
    <CardButton>R$ {product.price}</CardButton>
  </CardContainer>
  );
}

export default CardItem;