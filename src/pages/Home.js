import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestHTTP} from '../store/actions';
import Nav from '../components/Nav'
import { Section } from '../styles/styles';
import Card from '../components/Card';


const Home = () => {
  const dispatch=useDispatch();
  const state=useSelector(state => state.products)
 

  useEffect(()=> {
    dispatch(requestHTTP())
  }, [state])

  return(
   
    // <h1>{JSON.stringify(state)}</h1>
    <Section>
    <Nav /> 
         <Card />   

  </Section>
  ) 
}

export default Home;