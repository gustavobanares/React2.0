import {useState} from 'react'

const HookUseState = () => {
    // 1 - useState
    let userName = 'Bruno'

    const [name, setName] = useState('Gustavo')

    const changeNames = () => {
        userName = 'Crisitano Ronaldo'

        setName('Gustavo Banares')
    }

  return (

  <div>
    {/* 1- useState */}
    <h2>useState</h2>
    <p>Variavel: {userName}</p>
    <p>useState: {name}</p>
    <button onClick={changeNames}></button>
    <hr />
  </div>
)
}

export default HookUseState