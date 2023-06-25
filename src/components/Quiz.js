import React from "react";
import { useState } from "react";

const Quiz = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Who is the Prime Minister of India?",
      options: [
        { id: 0, text: "Rahul Gandhi", isCorrect: false },
        { id: 1, text: "Yogi Aadityanath", isCorrect: false },
        { id: 2, text: "Amit Shah", isCorrect: false },
        { id: 3, text: "Narendra Modi", isCorrect: true },
      ],
    },
    {
      text: "What is the capital of India?",
      options: [
        { id: 0, text: "New Delhi", isCorrect: true },
        { id: 1, text: "Kolkata", isCorrect: false },
        { id: 2, text: "Bhopal", isCorrect: false },
        { id: 3, text: "Mumbai", isCorrect: false },
      ],
    },
    {
      text: "Who is the president of the India?",
      options: [
        { id: 0, text: "Dropadi Murmu", isCorrect: true },
        { id: 1, text: "Ramnath Kovind", isCorrect: false },
        { id: 2, text: "Pratibha Patil", isCorrect: false },
        { id: 3, text: "Narendra Modi", isCorrect: false },
      ],
    },
    {
      text: "Which is the cleanest city in India?",
      options: [
        { id: 0, text: "Delhi", isCorrect: false },
        { id: 1, text: "Indore", isCorrect: true },
        { id: 2, text: "Bhoapl", isCorrect: false },
        { id: 3, text: "Pune", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the India?",
      options: [
        { id: 0, text: "Pakistan", isCorrect: false },
        { id: 1, text: "America", isCorrect: true },
        { id: 2, text: "China", isCorrect: true },
        { id: 3, text: "Bangladesh", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="text_quiz">
      <h1> Quiz </h1>

      <h2>Score: {score}</h2>

      {showResults ? (
        <div className="final-results">
          <h1> Result</h1>
          <h2>
            {score} out of {questions.length} correct
            {/* ( */}
            {/* {(score / questions.length) * 100}%) */}
          </h2>
          <button onClick={() => restartGame()}>Restart</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2> 
          <div className="question-box">
          <div style={{display:"flex",flexDirection:"column",width:"80%"}}>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <div style={{display:"flex", justifyContent:"space-evenly",marginTop:"6rem"}}>

            <button id="btn" 
             onClick={()=>{
              if(currentQuestion+1>1){
                setCurrentQuestion(currentQuestion-1);
              }
             }}
            >Pre</button>
            <button id="btn"
              onClick={()=>{
                if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion+1);
                }
              }}
             >Next</button>
                       </div>

          </div>
          <ul className="options">
            {questions[currentQuestion].options.map((option) => {
              return (
                
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
