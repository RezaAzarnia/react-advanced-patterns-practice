import React from "react";
import Counter from "../components/Counter";


export default function CountPage() {
  return (
    <div>
      <Counter>
        <Counter.Label>counter pattern test</Counter.Label>
        <Counter.Increase icon={"increase"} />
        <Counter.Count />
        <Counter.Decrease icon={"decrease"} />
      </Counter>
      <br />
   
    </div>
  );
}
