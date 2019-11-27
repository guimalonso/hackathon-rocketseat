import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('bg.png');
  background-size: cover;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: #F7BE29;
    border: 5px solid #D47439;
    border-radius: 100px;
    padding: 10px 30px;
    color: white;
    cursor: pointer;
    font-size: 36px;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
      background-color: #CC961B;
    }
  }
`;
