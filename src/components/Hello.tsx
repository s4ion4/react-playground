const Hello = (props: { text: string; onClick: () => void }) => {
  const { text, onClick } = props;

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

const Greeting = () => {
  const onClick = () => {
    console.log("Button clicked!");
  };

  return <Hello text="Hello world!" onClick={onClick} />;
};

export default Greeting;
