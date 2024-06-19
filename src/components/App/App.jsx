import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
export default function App() {
    const [assessment , setAssessment] = useState({
        good: 0,
        bad: 0,
        netural: 0
    });
    const updateFeedback = feedbackType => {
        setAssessment({
            ...assessment,
            [feedbackType]: assessment[feedbackType] + 1
        });
    }
    const resetFeedback = () => {
        setAssessment({
            ...assessment,
            good: 0,
            bad: 0,
            netural: 0
        });
    }
    const totalFeedback = assessment.good + assessment.bad + assessment.netural
    const positiveFeedback = Math.round((assessment.good / totalFeedback) * 100);
    return (
      <div>
        <Description />
        <Options
          onClick={updateFeedback}
          onReset={resetFeedback}
          totalFeedback={totalFeedback}
        />
        <Feedback
          assessment={assessment}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        ></Feedback>
      </div>
    );
}