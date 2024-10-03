import { useContext } from "react"

import { CounterContext } from "../context/CounterContext"


const Other = () => {

  const {counter} = useContext(CounterContext)

  return (
    <div>
      <h1>Other</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Other