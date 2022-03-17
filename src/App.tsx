import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        Thr Counter is:
        <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={() => setCount((count: number) => count + 1)}>Increment</button>
      <button data-test="decrement-button" onClick={() => setCount((count: number) => count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
