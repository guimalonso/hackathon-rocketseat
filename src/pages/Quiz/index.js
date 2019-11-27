import React, { Component } from "react";

import { ImageFrame, QuizFrame, Question, Answers, Code } from "./styles";

import api from "../../services/api";

export default class Quiz extends Component {
  state = {
    questions: [],
    quiz: 1
  };

  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = async () => {
    const response = await api.get("/questions");

    const questions = response.data;

    this.setState({ questions });
  };

  render() {
    const { questions, quiz } = this.state;

    return (
      <>
        <ImageFrame>
          <img src="" alt="" />
          <img src="" alt="" />
        </ImageFrame>
        <QuizFrame>
          <Question>
            <p>
              {questions.map(function(question) {
                if (question.id === quiz)
                  return <li key={question.id}>{question.title}</li>;
              })}
            </p>
          </Question>
          <Answers>
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
