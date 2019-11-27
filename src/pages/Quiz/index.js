import React, { Component } from "react";

import { ImageFrame, QuizFrame, Question, Answers, Code } from "./styles";

import api from "../../services/api";

export default class Quiz extends Component {
  state = {
    question: [],
    quiz: 1
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
          <Answers>
            {/* {question.options.map(function(q) {
              return <li key={q}>{q}</li>;
            })} */}
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
          </Answers>
          <Code>soma</Code>
          <span></span>
          <button>Enviar</button>
        </QuizFrame>
      </>
    );
  }
}
