export default function Feedback({ assessment, totalFeedback, positiveFeedback }) {
  return (
    <div>
          <p>Good: {assessment.good}</p>
          <p>Neutral: {assessment.netural}</p>
          <p>Bad: {assessment.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}%</p>
    </div>
  );
}