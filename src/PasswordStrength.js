import { useSelector } from "react-redux";
import zxcvbn from "zxcvbn";
import "./score.css";
function PasswordStrength(props) {
  const { password } = props;
  const score = zxcvbn(password).score + 1;

  const bars = [];

  for (let i = 0; i < score; i++) {
    bars.push("");
  }

  let color = "#FF0000";

  if (score === 5) {
    color = "#006400";
  } else if (score === 4) {
    color = "#00FF00";
  } else if (score === 3) {
    color = "#9ACD32";
  } else if (score === 2) {
    color = "#FFA500";
  } else if (score === 1) {
    color = "#FF0000";
  }

  const scoreStyle = {
    backgroundColor: color,
  };

  return (
    <div>
      {bars.map((color) => (
        <div className="score" style={scoreStyle}>
          {" "}
        </div>
      ))}
    </div>
  );
}

export default PasswordStrength;
