import { memo } from "react";

export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("Chile areaがレンダリングされたよ");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <div style={{ backgroundColor: "yellow" }}>
      {open ? <p> 子コンポーネント </p> : null}
    </div>
  );
});
