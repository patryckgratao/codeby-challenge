import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 30%;
  height: 900px;
  border-radius: 10px;

  & h3 {
    font-size: 1.3rem;
    text-align: center;
    padding: 0.8rem 0;
    border-bottom: 2px solid #cacaca;
    margin-top: 0.3rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 2rem;
  }
`;
