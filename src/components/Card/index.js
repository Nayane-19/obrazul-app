import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestHTTP } from '../../store/actions';
import { CardContainer, CardBody, CardTitle, CardButton, CardContent, CardImg } from "./CardElements";



function Card() {

    const dispatch=useDispatch();
    const state=useSelector(state => state.products)

    useEffect(()=> {
        dispatch(requestHTTP())
      }, [])

  return(
    <CardContainer>
        {state.products.products.map((product) => {   
       return (    
           <>   
        <CardBody key={product.ean}>
      <CardImg src={product.picture}/>
      <CardTitle>{product.name}</CardTitle>
      <CardContent>{product.price}</CardContent>
    </CardBody>
    <CardButton className="card__btn">View Recipe</CardButton>
    </>
    )     
})}

  </CardContainer>
  );
}

export default Card;