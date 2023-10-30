import { Counter } from "./counter";

const CountersPage = () => {
  return (
    <>
      <div className="flex items-center border-b shadow-md p-2 mb-4">
        <div className="container text-3xl font-semibold">Counters Page</div>
      </div>
      <div className="container">
        <Counter />
      </div>
    </>
  );
};

export default CountersPage;
