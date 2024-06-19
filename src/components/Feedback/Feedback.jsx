export default function Feedback({ assessment, totalFeedback, positiveFeedback }) {
  return (
    <div>
      {totalFeedback > 0 ? (
        <div>
          <p>Good: {assessment.good}</p>
          <p>Neutral: {assessment.netural}</p>
          <p>Bad: {assessment.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positiveFeedback}%</p>
        </div>
      ) : (
        <p>No Feedback yet</p>
      )}
    </div>
  );
}