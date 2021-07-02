import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestHTTP } from "../store/actions";
import Nav from "../components/Nav";
import { Section, Container } from "../styles/styles";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(requestHTTP());
  }, []);

  return (
    // <h1>{JSON.stringify(state)}</h1>
    <Section>
      <Nav />
      <Container>
        {state.products.products.map((product) => {
          return <Card product={product} />;
        })}
      </Container>
      <Footer />
    </Section>
  );
};

export default Home;
