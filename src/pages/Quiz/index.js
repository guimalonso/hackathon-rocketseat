import React, { Component, Fragment } from "react";

import { Container, ImageFrame, QuizFrame, Question, Answers, Code, Char } from "./styles";
import Board from '../../assets/board.png';

import api from "../../services/api";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      quiz: 0,
      checkAnswerMessage: "",
      endGame: false
    };
    this.char = React.createRef();
  }

  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = async () => {
    const response = await api.get("/questions");
    const questions = response.data;

    this.setState({ questions });
  };

  checkAnswer = () => {
    const str = document.getElementById("answerInput").value.trim();
    const answer = str.replace(/\s{2,}/g, " ");
    const { questions, quiz } = this.state;

    if (answer !== questions[quiz].answer) {
      this.setState({ checkAnswerMessage: "Resposta incorreta" });
    } else {
      const nextQuiz = this.state.quiz + 1;
      if (nextQuiz < questions.length) {
        this.setState({
          quiz: nextQuiz,
          checkAnswerMessage: ""
        });

        const char = this.char.current;
        char.style.animationDuration = '2s';
        
        if (char.style.marginLeft === '') {
          char.style.marginLeft = '0px';
        }
        
        char.style.marginLeft = (parseInt(char.style.marginLeft, 10) + 97) + 'px';
        setTimeout(() => {
          char.style.animationDuration = '0s';
        }, 2000);

        document.getElementById("answerInput").value = "";
      } else {
        this.setState({
          endGame: true,
          checkAnswerMessage: "Parabéns, você concluiu o desafio!"
        });
      }
    }
  };

  render() {
    const { questions, quiz } = this.state;
    const question = questions[quiz];

    return (
      <Container>
        <ImageFrame>
          <img src={Board} alt="" />
          <Char>
            <div ref={this.char}></div>
          </Char>
        </ImageFrame>
        <QuizFrame>
          {question && (
            <>
              <Question>
                <p>{question.title}</p>
              </Question>
              <Answers>
                {question.options.map(function(q, index) {
                  return <li key={index}>{q}</li>;
                })}
              </Answers>
              <Code>
                {question.code &&
                  question.code.split("\n").map((line, index) => {
                    if (line === "|input|") {
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
              {!this.state.endGame && (
                <button onClick={this.checkAnswer}>Enviar</button>
              )}
            </>
          )}
        </QuizFrame>
      </Container>
    );
  }
}
