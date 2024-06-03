import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

const TIMEOUT_FOR_ANSWER = 10000;

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer
}) {
  return (
    <div id="question">
      <QuestionTimer
        timeout={TIMEOUT_FOR_ANSWER}
        onTimeout={onSkipAnswer}
      ></QuestionTimer>
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
