import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestHTTP } from "../store/actions";
import Nav from "../components/Nav";
import { Section, Container } from "../styles/styles";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const LightTheme = {
  pageBackground: "#eee",
  cardBacground: "#fff",
  titleColor: "#000",
  tagLineColor: "black",
};

const DarkTheme = {
  pageBackground: "#1c2025",
  cardBacground: "#282c36",
  titleColor: "#fff",
  tagLineColor: "lavender",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};


const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  const [theme, setTheme]= useState("light");

  useEffect(() => {
    dispatch(requestHTTP());
  }, [dispatch]);
 
    

  return (    
   
    // <h1>{JSON.stringify(state)}</h1>  
    <ThemeProvider theme={themes[theme]}>
    <Section>      
      <Nav theme={theme} setTheme={setTheme}/>
      <Banner />
      <Container>
        {state.products.products.map((product) => {
          return <Card key={product.ean} product={product} />;
        })}
      </Container>
      <Footer />
    </Section>
    </ThemeProvider>
  );
};



export default Home;
