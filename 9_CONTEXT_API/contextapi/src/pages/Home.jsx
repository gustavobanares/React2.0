// import { useContext } from "react"

// import {CounterContext} from "../context/CounterContext" 
import ChangeCounter from "../components/ChangeCounter"

// 4 - refatorando um hook
import { useCounterContext } from "../hooks/useCounterContext"

// 5- context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"


const Home = () => {

    // const {counter} = useContext(CounterContext)
    const {counter} = useCounterContext()

    // 5 - contexto mais complexo
    const {color} = useTitleColorContext()

    console.log(color)

  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do contador: {counter}</p>
        {/* 3 - alterando valor contexto */}
        <ChangeCounter />
    </div>
  )
}

export default Home