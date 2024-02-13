import { useSelector } from "react-redux";
import PasswordStrength from "./PasswordStrength";

function PasswordsList() {
  const passwords = useSelector((state) => state.passwords.value);

  return (
    <ul>
      {passwords.map((password) => (
        <li>
          {password.name} - {password.password}
          <PasswordStrength password={password.password} />
        </li>
      ))}
    </ul>
  );
}

export default PasswordsList;
