export default function Options({ onClick , onReset , totalFeedback }) {
  return (
    <div>
      <button onClick={() => {onClick("good")}}>Good</button>
      <button onClick={() => {onClick("netural");}}>Neutral</button>
      <button onClick={() => { onClick("bad"); }}>Bad</button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}