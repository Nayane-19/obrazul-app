import React from 'react';
import { CardContainer, CardBody, CardTitle, CardButton, CardContent, CardImg } from "./CardElements";



function Card({product}) {

  return(
    <CardContainer>   
        <CardBody key={product.ean}>
      <CardImg src={product.picture}/>
      <CardTitle>{product.name}</CardTitle>
      <CardContent>{product.fullname}</CardContent>
    </CardBody>
    <CardButton className="card__btn">R$ {product.price}</CardButton>
  </CardContainer>
  );
}

export default Card;