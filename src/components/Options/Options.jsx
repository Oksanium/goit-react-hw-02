import css from "./Options.module.css";

export default function Options({
  feedback,
  setFeedback,
  stats,
  updFeedback,
  resetFeedback,
}) {
  // function updFeedback(e) {
  //   const key = e.target.value;
  //   if (key === "reset") {
  //     setFeedback({
  //       good: 0,
  //       neutral: 0,
  //       bad: 0,
  //     });
  //   } else {
  //     setFeedback({ ...feedback, [key]: feedback[key] + 1 });
  //   }
  // }
  const handleClick = (e) => {
    updFeedback(e.target.value);
  };

  return (
    <div className={css.btns}>
      <button onClick={handleClick} value="good">
        Good
      </button>
      <button onClick={handleClick} value="neutral">
        Neutral
      </button>
      <button onClick={handleClick} value="bad">
        Bad
      </button>

      {stats > 0 && (
        <button
          onClick={() => {
            resetFeedback();
          }}
          value="reset"
          className={css.reset}
        >
          Reset
        </button>
      )}
    </div>
  );
}
