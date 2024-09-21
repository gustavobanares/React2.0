import {useState} from 'react'

const ManageData = () => {
    let someData = 10

    console.log(someData)

    const [number, setNumber] = useState(15)

    console.log(number)

  return (
    <div>
        <div>
        <p>O valor de: {someData}</p>
        <button onClick={() => someData = 15}>Mudar variavel</button>
        </div>
        <div>
        <p>O valor de: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o state</button>
        </div>

    </div>
  )
}

export default ManageData