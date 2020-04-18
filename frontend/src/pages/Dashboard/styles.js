import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #fcfcfc;
`;

export const Header = styled.div`

  h1 {
    color: #f0f0f0;
  }

  button {
    margin: 0;
    background-color: transparent;

  }

  button:hover {
    background-color: transparent;
  }

  background-image: linear-gradient(-90deg, #0CCE6B, #1B998B);
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;


  text-align: center;

  padding: 10px;
`;
