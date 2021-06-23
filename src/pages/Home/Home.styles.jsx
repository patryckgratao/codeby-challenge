import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0;

  & div {
    & span {
      text-align: center;
      font-size: 1.1rem;
      margin: 1rem 0;
    }

    & ul {
      list-style: none;

      & li {
        margin: 1rem;
        text-decoration: none;
        font-size: 1rem;

        & a {
          text-decoration: none;
          color: #3b74f2;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
`;
