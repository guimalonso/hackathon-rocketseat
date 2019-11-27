import React, { Component, Fragment } from "react";

import { ImageFrame, QuizFrame, Question, Answers, Code } from "./styles";

import api from "../../services/api";

export default class Quiz extends Component {
  state = {
    questions: [],
    quiz: 0,
    checkAnswerMessage: '',
    endGame: false
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
    const answer = document.getElementById('answerInput').value.trim();

    const { questions, quiz } = this.state;

    if (answer !== questions[quiz].answer) {
      this.setState({ checkAnswerMessage: 'Resposta incorreta' });
    } else {
      const nextQuiz = this.state.quiz + 1;
      if (nextQuiz < questions.length) {
        this.setState({
          quiz: nextQuiz,
          checkAnswerMessage: '',
        });
        document.getElementById('answerInput').value = '';
      } else {
        this.setState({
          endGame: true,
          checkAnswerMessage: ''
        });
      }
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
              {!this.state.endGame && <button onClick={this.checkAnswer}>Enviar</button>}
            </>
          )}
        </QuizFrame>
      </>
    );
  }
}
