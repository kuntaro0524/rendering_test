import { useState } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App!");

  const [text, setText] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button> PUSHME </button>
      <ChildArea />
    </div>
  );
}
