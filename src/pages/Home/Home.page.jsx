import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { getListUnderTen, getListOverTen } from "../../services/shopping";
import animationData from "../../assets/animations/spinner.json";

import Modal from "../../components/Modal/Modal.component";
import { Container } from "./Home.styles";

const Home = () => {
  const [dataUnderTen, setDataUnderTen] = useState({});
  const [dataOverTen, setDataOverTen] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  console.log(dataUnderTen, dataOverTen);
  useEffect(() => {
    async function fetchLists() {
      try {
        const resultUnder = await getListUnderTen();
        setDataUnderTen(resultUnder);

        const resultOver = await getListOverTen();
        setDataOverTen(resultOver);

        setIsLoading(false);
      } catch (error) {
        console.log("error => ", error);
      }
    }
    fetchLists();
  }, []);

  return (
    <Container>
      <Modal>
        <h3>codeby Bomboniere</h3>
        {isLoading ? (
          <Lottie
            options={animationOptions}
            width={50}
            height={50}
            style={{ margin: "1rem auto" }}
          />
        ) : (
          <>
            <span>Menu de opções</span>
            <ul>
              <li>
                <Link
                  to={{
                    pathname: "/cart",
                    state: { data: dataOverTen },
                  }}
                >
                  ✔️ Página com Frete Grátis
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/cart",
                    state: { data: dataUnderTen },
                  }}
                >
                  ❌ Página sem Frete Grátis
                </Link>
              </li>
            </ul>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default Home;
