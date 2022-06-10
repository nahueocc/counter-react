import { useState } from 'react'
import './styles.css'

function Contador() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="contains">
      <h1>Counter</h1>
      <span
        id="value"
        style={{
          color: counter > 0 ? 'blue' : counter === 0 ? 'black' : 'red',
        }}
      >
        {counter}
      </span>
      <div className="button-contains">
        <button className="btn" onClick={() => setCounter(counter - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setCounter(0)}>
          reset
        </button>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          increase
        </button>
      </div>
    </div>
  )
}
export default Contador
