import quiz_logo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={quiz_logo} alt="Quiz logo" />
      <h1>React Quiz</h1>
    </header>
  );
}
