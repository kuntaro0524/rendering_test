import { useState } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App!");

  // メイン画面のインプットのテキストを取得するためのuseState
  const [text, setText] = useState("");
  // 子のコンポーネントを表示するかしないかを選択するための　useState
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickCheck = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickCheck}> PUSHME </button>
      <ChildArea open={open} />
    </div>
  );
}
