import { useState } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App!");

  const [count, setCount] = useState(0);

  const pushClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <input />
      <br />
      <br />
      <button> PUSHME </button>
      <ChildArea />
    </div>
  );
}
