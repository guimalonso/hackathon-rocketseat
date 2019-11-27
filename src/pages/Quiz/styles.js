import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const ImageFrame = styled.div`
  align-items: center;
  background-image: url('bg.png');
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  width: 50%;

  img:first-child {
    margin: auto;
    width: 95%;
  }

  div {
    position: absolute;
    top: 295px;
    left: 55px;
    width: 100%
  }
`;

export const QuizFrame = styled.div`
  padding: 10px;
  width: 50%;
`;

export const Question = styled.div``;

export const Answers = styled.ul``;

export const Code = styled.div``;

export const Char = styled.div`
  > div {
    background-image: url("https://raw.githubusercontent.com/ferreirastudios/Ciclo-com-animation-e-keyframes/master/imagens/ciclo-animacao.png");
    width: 58px;
    height: 87px;
    top: 30%;
    z-index: 99999;
    margin-top: 30px;
    -webkit-animation: boy 0s steps(8) infinite;
    animation: boy 0s steps(8) infinite;
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
