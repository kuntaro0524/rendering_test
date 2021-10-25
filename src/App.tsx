import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const pushClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <p> {count} </p>
      <button onClick={pushClick}> count up </button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
