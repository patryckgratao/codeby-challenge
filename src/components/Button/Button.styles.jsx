import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-top: 2px solid #cacaca;
`;

export const FullButton = styled.div`
  margin-top: 1.5rem;
  background: ${(props) => props.color || "#3B74F2"};
  padding: 1rem 0;
  border-radius: 8px;
  outline: none;
  border: none;
  width: 95%;
  cursor: pointer;
  margin: 0.8rem auto;
`;

export const ButtonText = styled.span`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Poppins";


  @media (max-width: 1024px) {
    font-size: 0.85rem;
  }
`;
