import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="text-center text-3xl my-5">
        Learning to build small piece of code
      </div>
      <ul className="text-xl">
        <li>
          <Link href="/toast">Toast</Link>
        </li>
        <li>
          <Link href="/input">Input</Link>
        </li>
        <li>
          <Link href="/inputCalc">InputCalc</Link>
        </li>
        <li>
          <Link href="/inputCalc2">InputCalc2</Link>
        </li>
        <li>
          <Link href="/counter">Counter</Link>
        </li>
        <li>
          <Link href="/counters">Counters</Link>
        </li>
      </ul>
    </div>
  );
}
