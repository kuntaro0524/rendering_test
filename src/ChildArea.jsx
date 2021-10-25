export const ChildArea = (props) => {
  const { open } = props;
  console.log(open);

  return <div>{open ? <p> 子コンポーネント </p> : null}</div>;
};
