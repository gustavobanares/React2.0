// import { useContext } from "react"

// import { CounterContext } from "../context/CounterContext"

import { useCounterContext } from "../hooks/useCounterContext"


const Other = () => {

  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  return (
    <div>
      <h1>Other</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Other