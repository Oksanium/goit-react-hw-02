import css from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad }) {
  const total = good + neutral + bad;
  const positive = Math.round((good / total) * 100);

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      {Boolean(positive) && <p>Positive: {positive}%</p>}
    </div>
  );
}
