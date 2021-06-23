import styled from "styled-components";

export const ButtonContainer = styled.div`
  background: ${(props) => props.color || "#3B74F2"};
  padding: 0.7rem 0;
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
  font-family: 'Poppins';
`;
