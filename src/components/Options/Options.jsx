import css from "./Options.module.css";

export default function Options({ feedback, setFeedback, stats }) {
  function updFeedback(e) {
    const key = e.target.value;
    if (key === "reset") {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else {
      setFeedback({ ...feedback, [key]: ++feedback[key] });
    }
  }

  return (
    <div className={css.btns}>
      <button onClick={updFeedback} value="good">
        Good
      </button>
      <button onClick={updFeedback} value="neutral">
        Neutral
      </button>
      <button onClick={updFeedback} value="bad">
        Bad
      </button>

      {Boolean(stats) && (
        <button onClick={updFeedback} value="reset" className={css.reset}>
          Reset
        </button>
      )}

      <button
        onClick={() => {
          localStorage.removeItem("userFeedback");
        }}
        className={css.clean}
      >
        clean local storage
      </button>
    </div>
  );
}
