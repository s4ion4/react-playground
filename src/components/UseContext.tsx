import { createContext, useContext } from "react";

type User = {
  id: number;
  name: string;
};

const UserContext = createContext<User | null>(null);

const GrandChild = () => {
  const user = useContext(UserContext);
  return user !== null ? <p>Hello, {user.name}</p> : null;
};

const Child = () => {
  const now = new Date();
  return (
    <div>
      <p>Current time: {now.toLocaleTimeString()}</p>
      <GrandChild />
    </div>
  );
};

export const UseContextParent = () => {
  const user: User = { id: 1, name: "Alice" };
  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
};
