import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal.component";
import { Container } from "./Home.styles";

const Home = () => (
  <Container>
    <Modal>
      <h3>CodeBy Bomboniere</h3>
      <span>Menu de opções</span>
      <ul>
        <li>
          <Link to="cart">✔️ Página com Frete Grátis</Link>
        </li>
        <li>
          <Link to="aloha">❌ Página sem Frete Grátis</Link>
        </li>
      </ul>
    </Modal>
  </Container>
);

export default Home;
