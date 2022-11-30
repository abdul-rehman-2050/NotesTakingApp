import React from "react";

type CounterProps = {
  initalCount?: number;
};

function Counter({ initalCount }: CounterProps) {
  const [count, setCount] = React.useState(initalCount ? initalCount : 0);
  return (
    <div id="main" className="m-8 grid  grid-flow-col gap-0">
      <div className="bg-green-300 ml-auto my-auto">
        <button
          className=" bg-red-500 text-4xl text-white"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
      <div className="bg-green-300 rounded-lg text-center text-7xl">
        {count}
      </div>
      <div className="bg-green-300 mr-auto my-auto">
        <button
          className=" bg-red-500 text-4xl text-white"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
