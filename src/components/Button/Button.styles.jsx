import styled from "styled-components";

export const ButtonContainer = styled.div`
  background: ${(props) => props.color || "#3B74F2"};
  padding: 1rem;
  border-radius: 5px;
  outline: none;
  border: none;
  width: 100%;
`;

export const ButtonText = styled.span`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Poppins';
`;
