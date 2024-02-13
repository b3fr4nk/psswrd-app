import logo from "./logo.svg";
import "./App.css";
import Password from "./password";
import PasswordsList from "./PasswordsList";
import PasswordStrength from "./PasswordStrength";

function App() {
  return (
    <div className="App">
      <Password />
      <PasswordStrength />
      <div>
        <PasswordsList />
      </div>
    </div>
  );
}

export default App;
