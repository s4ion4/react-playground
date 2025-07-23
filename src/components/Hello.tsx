const Hello = () => {
  const onClick = () => {
    console.log("Hello, World!");
  };
  const text = "Hello, World!";

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Hello;
