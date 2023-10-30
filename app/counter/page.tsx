import { Counter } from "./counter";

const CounterPage = () => {
  return (
    <>
      <div className="flex items-center border-b shadow-md p-2 mb-4">
        <div className="container text-3xl font-semibold">Counter Page</div>
      </div>
      <div className="container">
        <Counter />
      </div>
    </>
  );
};

export default CounterPage;
