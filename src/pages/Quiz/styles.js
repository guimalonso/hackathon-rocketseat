import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const ImageFrame = styled.div`
  background-image: url('bg.png');
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 50%;
  min-width: 750px;

  span {
    font-size: 16px;
    color: green;
    font-weight: bold;
    position: absolute;
    top: 20px;
  }

  img {
    margin: auto;
    width: 750px;
  }

  div {
    position: absolute;
    /* top: 295px; */
    left: 55px;
    margin-left: 0px;
    width: 100%
  }
`;

export const QuizFrame = styled.div`
  padding: 10px;
  background: linear-gradient(225deg, #000 60%, #1b2d4a);
  color: #fff;
  padding: 40px;

  button {
    background-color: #F7BE29;
    border: 5px solid #D47439;
    border-radius: 100px;
    padding: 10px 30px;
    color: #333;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;

    &:hover {
      background-color: #CC961B;
    }
  }

  > span {
    margin-right: 10px;
    color: ${props => props.endGame ? 'green' : 'red'};
    font-weight: bold;
  }
`;

export const Question = styled.div``;

export const Answers = styled.ul``;

export const Code = styled.div`
  margin-bottom: 10px;

  input {
    background-color: transparent;
    color: #fff;
    border: none;
    outline: 0;
  }
`;

export const Char = styled.div`
  > div {
    background-image: url("https://raw.githubusercontent.com/ferreirastudios/Ciclo-com-animation-e-keyframes/master/imagens/ciclo-animacao.png");
    width: 58px;
    height: 87px;
    top: calc((100vh / 2) - 25px);
    z-index: 99999;
    margin-top: 0px;
    margin-left: 0px;
    -webkit-animation: boy 0s steps(8) infinite;
    animation: boy 0s steps(8) infinite;
    transition: margin 2s;
  }

  @keyframes boy {
    from {
      background-position: 0px;
    }
    to {
      background-position: -464px;
      transform: translateX(30px);
    }
  }
`;
