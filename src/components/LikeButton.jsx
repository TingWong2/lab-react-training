import './App.css';
import { useState } from 'react';

// This is too set a state using a function that is intensive to compute
function calculateSomething() {
  return 'Hellow';
}

function App() {
  const [superIntensive, setSuperIntensive] = useState(calculateSomething);

  const [counts, setCounts] = useState({ count1: 0, count2: 3 });
  const [color, setColor] = useState('');

  // const handleClick = (action) => {
  // 	return () => {
  // 		setCounts((prevCount) => prevCount + 1);

  return (
    <div
      className="App"
      style={{
        backgroundColor: color,
      }}
    >
      <h1>Count like ! </h1>
      <h2>The count1 is: {counts.count1}</h2>

      <button
        onClick={() => {
          setCounts({
            ...counts,
            count1: counts.count1 + 1,
          });
        }}
      >
        Increment me !
      </button>

      {/* <h2>The count2 is: {counts.count2}</h2>
			<button onClick={handleClick('increment')}>Increment me !</button>
			<button onClick={handleClick('increment')}>Decrement me !</button> */}
      {/* <button onClick={() => setCount(count + 1)}>Increment me !</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>
				Decrement me !
			</button> */}

      {/* You can have clickEvent on any HTML tag */}
      <p onClick={() => setColor('dodgerblue')}>
        Click me to change the color !
      </p>
      <p onClick={() => {}}>Mutations !</p>
    </div>
  );
}

export default App;
