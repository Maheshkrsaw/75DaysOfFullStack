import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementAsync, incrementByAmount } from "./Store/reducers/CounterSlice"


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
      <h1 className="text-5xl font-bold mb-8">Counter: {count}</h1>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          +1
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          -1
        </button>

        <button
          onClick={() => dispatch(incrementAsync(5))}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          +5
        </button>
      </div>
    </div>
  )
}

export default App
