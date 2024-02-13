import { useSelector } from "react-redux";
import zxcvbn from "zxcvbn";
function PasswordStrength(props) {
  const { password } = props;
  const score = zxcvbn(password).score;

  const bars = [" "] * score;

  if (score === 4) {
    const color = "#006400";
  } else if (score === 3) {
    const color = "#00FF00";
  } else if (score === 2) {
    const color = "#9ACD32";
  } else if (score === 1) {
    const color = "#FFA500";
  } else if (score === 0) {
    const color = "#FF0000";
  }

  return (
    <div>
      {bars.map((color) => (
        <div className="score" style={{ backgroundColor: color }}></div>
      ))}
    </div>
  );
}

export default PasswordStrength;
