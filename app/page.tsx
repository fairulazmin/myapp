import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="text-center text-3xl my-5">
        Learning to build small piece of code
      </div>
      <ul className="text-xl">
        <li>
          <Link href="/icon">Icon</Link>
        </li>
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
          <Link href="/inputSelect">InputSelect</Link>
        </li>
        <li>
          <Link href="/inputButton">InputButton</Link>
        </li>
        <li>
          <Link href="/inputZod">InputZod</Link>
        </li>
        <Link href="/counter">Counter</Link>
        <li>
          <Link href="/counters">Counters</Link>
        </li>
        <li>
          <Link href="/switch">Switch</Link>
        </li>
        <li>
          <Link href="/sidebar">Sidebar</Link>
        </li>
        <li>
          <Link href="/todolist">Todo list</Link>
        </li>
        <li>
          <Link href="/todolistWithDatabase">Todo list with Database</Link>
        </li>
        <li>
          <Link href="/tempConverter">Temperature Converter</Link>
        </li>
        <li>
          <Link href="/muTable">MU Table</Link>
        </li>
        <li>
          <Link href="/acc_calb">Accelerometer Calibration</Link>
        </li>
        <li>
          <Link href="/payment">Table - Payment</Link>
        </li>
        <li>
          <Link href="/tasks">Table - Tasks</Link>
        </li>
        <li>
          <Link href="/recursiveAccordion">Recursive Accordion</Link>
        </li>
        <li>
          <Link href="/verticalStepper">Vertical Stepper</Link>
        </li>
        <li>
          <Link href="/readFile">Read file</Link>
        </li>
        <li>
          <Link href="/formProfile">Form Profile</Link>
        </li>
        <li>
          <Link href="/formAccount">Form Account</Link>
        </li>
      </ul>
    </div>
  );
}
