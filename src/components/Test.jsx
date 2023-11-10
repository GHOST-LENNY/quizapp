import { useState } from "react";
import questions from "./QuestionsArray";
import Question from "./Question";
import CountdownTimer from "./CountdownTimer";

const Test = () => {
  const [currentQues, setCurrentQues] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questions.length).fill(null)
  );
  const [score, setScore] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);

  const finalQuestion = currentQues === questions.length - 1;

  const targetTime = 300;

  const handleNext = () => {
    const nextQuestion = currentQues + 1;
    if (nextQuestion < questions.length) {
      setCurrentQues(nextQuestion);
    }
  };

  const handlePrevious = () => {
    const prevQuestion = currentQues - 1;
    if (prevQuestion >= 0) {
      setCurrentQues(prevQuestion);
    }
  };

  const handleAnswerChange = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQues] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleScore = () => {
    // Calculate the score based on user selected Options when submitting
    const newScore = selectedOptions.reduce((totalScore, option, index) => {
      const correctOption = questions[index].answers.find(
        (answer) => answer.isCorrect
      )?.option;
      if (option === correctOption) {
        return totalScore + 20;
      }
      return totalScore;
    }, 0);
    setScore(newScore);
  };

  const handleSubmit = () => {
    handleScore();
    setTestCompleted(true);
  };

  const handleTimerExpired = () => {
    handleScore();
    setTestCompleted(true);
  };

  return (
    <div className="h-1/2 max-w-screen-md px-4 py-4 mx-6 my-4 lg:mx-auto shadow-lg rounded-lg">
      <div>
        {!testCompleted && (
          <CountdownTimer
            targetTime={targetTime}
            onTimeExpired={handleTimerExpired}
          />
        )}
      </div>

      {testCompleted ? (
        <p className="max-w-screen-md h-60 flex justify-center items-center sm:text-2xl">
          Your score is {score}.
        </p>
      ) : (
        <div>
          <div>
            <h1 className="font-bold mb-3 md:text-2xl">
              Question {currentQues + 1} of {questions.length}
            </h1>
            <Question
              question={questions[currentQues]}
              selectedOption={selectedOptions[currentQues]}
              onAnswerChange={handleAnswerChange}
            />
          </div>

          <div className="flex my-2 justify-center space-x-8">
            {currentQues > 0 && (
              <button
                onClick={handlePrevious}
                className="text-sm px-2 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500"
              >
                Prev
              </button>
            )}

            <button
              onClick={finalQuestion ? handleSubmit : handleNext}
              className="text-sm px-2 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500"
            >
              {finalQuestion ? "Submit Test" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
