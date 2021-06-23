import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem 0.8rem;
  /* max-height: 100rem; */
  overflow-y: auto;
  border-bottom: 2px solid #cacaca;

`;


export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 11fr;
  margin: 0.5rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 1px solid #D2D2D2;
  
  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;


export const DetailsContainer = styled.div`
  margin-left: 1rem;
`;


export const ChocoName = styled.span`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;


export const OriginalPrice = styled.div`
  font-size: 0.8rem;  
  color: #B0AFAE;
`;


export const NewPrice = styled.div`
  color: #202020;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0.8rem;

  & span {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 1rem;
  }

`;

export const ButtonContainer = styled.div`
  display: flex;
  border-top: 2px solid #cacaca;
  /* margin-top: 1rem; */

  & button {
    margin-top: 1.5rem;
  }
`;