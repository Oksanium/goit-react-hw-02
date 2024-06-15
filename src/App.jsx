import { useEffect, useState } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const userFeedback = JSON.parse(localStorage.getItem("userFeedback"));
    return (
      userFeedback || {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("userFeedback", JSON.stringify(feedback));
  }, [feedback]);

  function updFeedback(value) {
    setFeedback({ ...feedback, [value]: feedback[value] + 1 });
  }

  function resetFeedback() {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const stats = feedback.good + feedback.bad + feedback.neutral;
  const positive = Math.round((feedback.good / stats) * 100);

  return (
    <>
      <Description />
      <Options
        feedback={feedback}
        updFeedback={updFeedback}
        stats={stats}
        resetFeedback={resetFeedback}
      />
      {stats ? (
        <Feedback {...feedback} total={stats} positive={positive} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
