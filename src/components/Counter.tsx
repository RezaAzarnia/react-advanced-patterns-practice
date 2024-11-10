import React, { createContext, ReactNode, useContext, useState } from "react";
type ContextProps = {
  count: number;
  inCrease: () => void;
  deCrease: () => void;
};
type ChildrenProps = {
  children: ReactNode;
};
type IconProps = {
  icon: ReactNode | string;
};
const CounterContext = createContext<ContextProps | null>(null);

function Counter({ children }: ChildrenProps) {
  const [count, setCount] = useState<number>(0);
  const inCrease = () => setCount((prev) => prev + 1);
  const deCrease = () => setCount((prev) => prev - 1);
  return (
    <CounterContext.Provider value={{ count, inCrease, deCrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}
const useCounterContext = () => {
  const contextValues = useContext(CounterContext);
  if (!contextValues) {
    throw new Error("this value doens exist in this context");
  }
  return contextValues;
};
function Count() {
  const { count } = useCounterContext();
  return <span className="px-2">{count}</span>;
}

function Increase({ icon }: IconProps) {
  const { inCrease } = useCounterContext();
  return (
    <button
      onClick={inCrease}
      className="px-4 py-2 text-white capitalize transition-colors bg-green-500 rounded-md outline-none hover:bg-green-600"
    >
      {icon}
    </button>
  );
}

function Decrease({ icon }: IconProps) {
  const { deCrease } = useCounterContext();
  return (
    <button
      onClick={deCrease}
      className="px-4 py-2 text-white capitalize transition-colors bg-red-500 rounded-md outline-none hover:bg-red-600"
    >
      {icon}
    </button>
  );
}

function Label({ children }: ChildrenProps) {
  return <h1 className="text-2xl capitalize">{children}</h1>;
}

Counter.Increase = Increase;
Counter.Decrease = Decrease;
Counter.Label = Label;
Counter.Count = Count;

export default Counter;
