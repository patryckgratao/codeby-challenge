import styled from "styled-components";

export const ButtonContainer = styled.div`
  background: ${(props) => props.color || "#3B74F2"};
  padding: 0.8rem 0;
  border-radius: 10px;
  outline: none;
  border: none;
  width: 100%;
  cursor: pointer;
  margin: 0.8rem 0;
`;

export const ButtonText = styled.span`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Poppins';
`;
