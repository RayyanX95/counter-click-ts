import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [hideClassName, toggleHideClassName] = useState<string>('d-none');

  const incrementHandler = () => {
    setCount((count: number) => count + 1);
    if (hideClassName === '') toggleHideClassName('d-none');
  }

  const decrementHandler = () => {
    if (count === 0) return toggleHideClassName('');
    setCount((count: number) => count - 1);
  }

  return (
    <div data-test="component-app" className="App my-5">
      <h1 data-test="counter-display">
        Thr Counter is:
        <span data-test="count" className="ms-2">{count}</span>
      </h1>
      <p data-test="error-message" className={`text-danger ${hideClassName}`}>Counter cannot goes below 0</p>
      <button className="btn btn-success me-2" data-test="increment-button" onClick={incrementHandler}>Increment</button>
      <button className="btn btn-primary" data-test="decrement-button" onClick={decrementHandler}>Decrement</button>
    </div>
  );
}

export default App;
