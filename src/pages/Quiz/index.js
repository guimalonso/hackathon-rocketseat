import React, { Component } from "react";

import { ImageFrame, QuizFrame, Question, Answers, Code } from "./styles";

import api from "../../services/api";

export default class Quiz extends Component {
  state = {
    question: [],
    quiz: 0,
    checkAnswerMessage: ''
  };

  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = async () => {
    const response = await api.get("/questions");

    const question = response.data[this.state.quiz];

    this.setState({ question });

    console.log(this.state.question);
  };

  checkAnswer = () => {
    const answer = document.getElementById('answerText');

    if (answer !== this.state.question.answer) {
      this.setState({ checkAnswerMessage: 'Resposta incorreta' });
    }
  };

  render() {
    const { question } = this.state;
    console.log(question.options);

    return (
      <>
        <ImageFrame>
          <img src="" alt="" />
          <img src="" alt="" />
        </ImageFrame>
        <QuizFrame>
          <Question>
            <p>{question.title}</p>
          </Question>
          {question.options && <Answers>
            {question.options.map(function (q, index) {
              return <li key={index}>{q}</li>;
            })}
          </Answers>}
          <Code>
            {question.code.replace('|input|',
              `<input type="text" id="answerInput">`)}
          </Code>
          <span>{this.state.checkAnswerMessage}</span>
          <button onClick={this.checkAnswer}>Enviar</button>
        </QuizFrame>
      </>
    );
  }
}
