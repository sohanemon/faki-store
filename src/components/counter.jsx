import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const changeCount = (i) => {
    !!i ? setCount((e) => e++) : setCount((e) => e--);
    /* -------------- this may show error by assigning e to e -------------- */
    !!i ? setCount((e) => ++e) : setCount((e) => --e);
  };

  return (
    <div className='grid place-content-center h-screen text-center'>
      <div>
        <p className='text-xl font-medium'>Change the counting value</p>
        <h1
          className={`text-9xl ${
            count < 0
              ? "text-red-800"
              : count === 0
              ? "text-yellow-600"
              : "text-green-800"
          } font-semibold  m-12`}
        >
          {count}
        </h1>
        <button
          className='active:scale-95 bg-red-800 shadow-lg px-4 py-2 mx-4 my-1 text-white rounded-lg font-semibold'
          onClick={() => changeCount(0)}
        >
          Decrease
        </button>
        <button
          className='active:scale-95 bg-green-800 shadow-lg px-4 py-2 mx-4 my-1 text-white rounded-lg font-semibold'
          onClick={() => changeCount(1)}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
