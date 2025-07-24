import React from "react";

type HelloProps = {
  text: string;
  onClick: () => void;
};

const signInContext = React.createContext("");

const Hello = (props: HelloProps) => {
  const { text, onClick } = props;

  return (
    <signInContext.Consumer>
      {(contextValue) => {
        return (
          <div>
            <h1>{text}</h1>
            <button onClick={onClick}>{contextValue}</button>
          </div>
        );
      }}
    </signInContext.Consumer>
  );
};

const Greeting = () => {
  const onClick = () => {
    console.log("Button clicked!");
  };
  return (
    <signInContext.Provider value="Sign In">
      <Hello text="Hello world!" onClick={onClick} />
    </signInContext.Provider>
  );
};

export default Greeting;
