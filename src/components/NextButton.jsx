import React from 'react';

function NextButton({ dispatch, answer, index, numOfQuestions }) {
  if (answer === null) return null;

  let typeOfAction, buttonText;
  if (index < numOfQuestions - 1) {
    typeOfAction = 'nextQuestion';
    buttonText = 'Next';
  } else {
    typeOfAction = 'finish';
    buttonText = 'Finish';
  }

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: `${typeOfAction}` })}
    >
      {buttonText}
    </button>
  );
}

export default NextButton;
