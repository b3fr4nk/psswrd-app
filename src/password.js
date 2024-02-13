import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPassword } from "./features/passwords/passwordsSlice";
import PasswordStrength from "./PasswordStrength";

function getRandomChar() {
  const charCode = Math.floor(Math.random() * 94) + 33;
  return String.fromCharCode(charCode);
}

function generatePassword(length) {
  // generate a password here
  console.log("generating password");
  let password = "";
  for (let i = 0; i < length; i++) {
    password += getRandomChar();
  }

  return password;
}

function Password() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("p@$$w0rd");
  const [name, setName] = useState("None");
  const [length, setLength] = useState(10);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <input
        type="number"
        onChange={(e) => setLength(e.target.value)}
        value={length}
      ></input>
      <div>
        <button
          onClick={(e) => {
            const pswrd = generatePassword(length);
            setPassword(pswrd);
          }}
        >
          Generate
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(addPassword({ name, password }))}>
          Save
        </button>
      </div>
      <PasswordStrength password={password} />
    </div>
  );
}

export default Password;
