const AnswerBox = ({ answer }) => {
  if (!answer) return null;

  let displayText = answer;

  if (answer === "No content ingested yet") {
    displayText = "No content ingested yet. Please add some content first.";
  } else if (answer === "I don't know based on the given information.") {
    displayText = "I can't find anything related to the data you have provided till now.";
  }

  return (
    <div className="card">
      <h3>Summary Answer</h3>
      <p style={{ marginTop: 8 }}>{displayText}</p>
    </div>
  );
};

export default AnswerBox;
