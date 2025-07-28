import React, { useState, useMemo } from "react";

export const UseMemoSample = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    setItems((prevItems) => {
      return [...prevItems, text];
    });

    setText("");
  };

  const numberOfCharacters1 = (() => {
    console.log("numberOfCharacters1 calculated");
    return items.reduce((acc, cur) => acc + cur.length, 0);
  })();

  const numberOfCharacters2 = useMemo(() => {
    console.log("numberOfCharacters2 calculated");
    return items.reduce((acc, cur) => acc + cur.length, 0);
  }, [items]);

  return (
    <div>
      <h1>UseMemoExample</h1>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>Add</button>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Characters (without useMemo): {numberOfCharacters1}</p>
        <p>Total Characters (with useMemo): {numberOfCharacters2}</p>
      </div>
    </div>
  );
};
