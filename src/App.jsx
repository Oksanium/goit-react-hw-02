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

  const stats = feedback.good + feedback.bad + feedback.neutral;

  return (
    <>
      <Description />
      <Options feedback={feedback} setFeedback={setFeedback} stats={stats} />
      {stats ? <Feedback {...feedback} /> : <Notification />}
    </>
  );
}

export default App;
