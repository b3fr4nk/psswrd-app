import logo from "./logo.svg";
import "./App.css";
import Password from "./password";
import PasswordsList from "./PasswordsList";

function App() {
  return (
    <div className="App">
      <Password />
      <div>
        <PasswordsList />
      </div>
    </div>
  );
}

export default App;
