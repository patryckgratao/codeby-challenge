import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

export const MessageContainer = styled.div`
  background-color: #C7FFA6;
  border-radius: 100px;
  padding: 0.7rem 2rem;

@media (max-width: 1024px) {
  width: 100%;
  margin: 0 1rem;
}
`;

export const Text = styled.span`
  color: #217A09;
  display: flex;
  justify-content: center;
  font-weight: 600;
`;