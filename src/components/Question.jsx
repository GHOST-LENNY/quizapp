/* eslint-disable react/prop-types */

const Question = ({ question, selectedOption, onAnswerChange }) => {
  const handleOptionClick = (option) => {
    onAnswerChange(option);
  };

  return (
    <div>
      <p className="md:text-2xl mb-2 font-medium " >{question.questionText}</p>
      <ul>
        {question.answers.map((answer) => (
          <li
          className="md:text-lg w-fit "
            key={answer.option}
            onClick={() => {
              handleOptionClick(answer.option);
            }}
          >
            <label htmlFor={answer.option}>
              <input
                className="mr-2"
                type="radio"
                name={question.questionText}
                checked={selectedOption === answer.option}
                value={answer.option}
                onChange={() => onAnswerChange(answer.option)}
              />
              {answer.option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
