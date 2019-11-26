import React from 'react';

// import { Container } from './styles';

export default function Quiz() {
  return (
    <>
      <ImageFrame>
        <img src="" alt="" />
        <img src="" alt="" />
      </ImageFrame>
      <QuizFrame>
        <Question>
          <p>1) Complete a função para somar dois números:</p>
        </Question>
        <Answers>
          <li>a) 2 + 2</li>
          <li>b) retorne 2 + 2</li>
          <li>c) a = 2 + 2</li>
          <li>d) [2 + 2]</li>
        </Answers>
        <Code>
          soma(a,b)
          início
          <input type="text" />
          fim
        </Code>
        <span></span>
        <button>Enviar</button>
      </QuizFrame>
    </>
  );
}
