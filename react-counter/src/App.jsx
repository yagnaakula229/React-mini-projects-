import { useState } from "react";
import "./App.css";g
function App() {

  const [count, setCount] = useState(0);

  function increase() {
    if (count < 10000000) {
      setCount(count + 1);
    }
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>

      <h1>{count}</h1>

      <button onClick={increase}>
        Increase
      </button>

      <button onClick={decrease}>
        Decrease
      </button>

      <button onClick={reset}>
        Reset
      </button>

    </div>
  );
}

export default App;