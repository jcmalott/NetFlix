import React from "react";
import RegisterationForm from "./RegisterationForm";

function QuestionsDisplay(props) {

  function handleClick(event) {
    const {name} = event.target;

    if(name !== undefined){
      var whichQuestion = name.slice(-1);
      var elementAnswer = "div[name='answer-" + whichQuestion + "']"
      var findAnswer = document.querySelector(elementAnswer);
      findAnswer.hidden = !findAnswer.hidden;
    }
  }

  return (
    <div className="basic-container">
        <h1 className="question-title">{props.title}</h1>
        <div className="question-list list-group">
          {props.questions.map((question, index) => {
            return(
              <div className="quesiton-list-item list-group-item">
                {createQuestion(question, index)}
                {createAnswer(question, index)}
              </div>);
           })}
        </div>
        {RegisterationForm()}
    </div>
  );


  function createQuestion(question, index){
    var questionName = "question-" + index;
    return(
    <button
      name={questionName}
      type="button"
      className="question-button list-group-item list-group-item-action"
      onClick={handleClick}>
      {question.question}
      <i className="question-icon fas fa-plus fa-lg"></i>
    </button>
   );
  }

  function createAnswer(question, index){
    var answerName = "answer-" + index;
    return(
      <div
        name={answerName}
        style={{"padding": "1em 1em 0 1em"}}
        hidden={true}>
        <span>
          {question.answer.map(paragraph => {
            return(
              <div> <h2>{paragraph}</h2> <br /> </div>
          )})}
        </span>
      </div>
    );
  }
}

export default QuestionsDisplay;
