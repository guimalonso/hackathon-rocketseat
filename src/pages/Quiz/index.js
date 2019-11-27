import React, { Component, Fragment } from "react";

import { ImageFrame, QuizFrame, Question, Answers, Code } from "./styles";

import api from "../../services/api";

export default class Quiz extends Component {
  state = {
    questions: [],
    quiz: 0,
    checkAnswerMessage: ''
  };

  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = async () => {
    const response = await api.get("/questions");
    const questions = response.data;

    this.setState({ questions });
  };

  checkAnswer = () => {
    const answer = document.getElementById('answerInput').value;

    const { questions, quiz } = this.state;

    if (answer !== questions[quiz].answer) {
      this.setState({ checkAnswerMessage: 'Resposta incorreta' });
    } else {
      this.setState({
        quiz: this.state.quiz + 1,
        checkAnswerMessage: '',
      });
      document.getElementById('answerInput').value = '';
    }
  };

  render() {
    const { questions, quiz } = this.state;
    const question = questions[quiz];

    return (
      <>
        <ImageFrame>
          <img src="" alt="" />
          <img src="" alt="" />
        </ImageFrame>
        <QuizFrame>

          {question && (
            <>
              <Question>
                <p>{question.title}</p>
              </Question>
              <Answers>
                {question.options.map(function (q, index) {
                  return <li key={index}>{q}</li>;
                })}
              </Answers>
              <Code>
                {question.code && question.code.split('\n').map((line, index) => {
                  if (line === '|input|') {
                    return (
                      <Fragment key={index}>
                        <input type="text" id="answerInput" />
                        <br />
                      </Fragment>
                    );
                  }

                  return (
                    <Fragment key={index}>
                      <span>{line}</span>
                      <br />
                    </Fragment>
                  );
                })}
              </Code>
              <span>{this.state.checkAnswerMessage}</span>
              {questions[quiz + 1] && <button onClick={this.checkAnswer}>Enviar</button>}
            </>
          )}
        </QuizFrame>
      </>
    );
  }
}
