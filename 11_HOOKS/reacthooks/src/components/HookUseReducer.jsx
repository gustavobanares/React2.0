import {useReducer} from 'react'

const HookUseReducer = () => {
    // 1 - comecando com o useReducer
    const [number, dispatch] = useReducer((state, action) =>{
        return Math.random(state)
    })


  return (
    <div>
        <h2>useReducer</h2>
        <p>Numero: {number}</p>
        <button onClick={dispatch}>Alterar numero!</button>
        <hr />
    </div>
  )
}

export default HookUseReducer