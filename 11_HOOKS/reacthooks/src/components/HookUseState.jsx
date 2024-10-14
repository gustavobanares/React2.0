import {useState} from 'react'

const HookUseState = () => {
    // 1 - useState
    let userName = 'Bruno'

    const [name, setName] = useState('Gustavo')

    const changeNames = () => {
        userName = 'Cristiano Ronaldo'

        setName('Gustavo Banares')

        console.log(userName)
    }

    console.log(name)

    // 2 - useState e input
    const [age, setAge] = useState(20)

    const handleSubmit = (e) =>{
      e.preventDefault()

      // envia a uma API
      console.log(age)
    }



  return (

  <div>
    {/* 1- useState */}
    <h2>useState</h2>
    <p>Variavel: {userName}</p>
    <p>useState: {name}</p>
    <button onClick={changeNames}>Mudar nomes!</button>
    {/* 2 - useState e input */}
    <p>Digite sua idade:</p>
    <form onSubmit={handleSubmit}>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="submit" value='Enviar' />
    </form>
    <p>Voce tem {age} anos!</p>
    <hr />
  </div>
)
}

export default HookUseState