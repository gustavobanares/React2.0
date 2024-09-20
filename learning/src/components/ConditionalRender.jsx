import React, { useState } from 'react'

const ConditionalRender = () => {
        const [x] = useState(false)

        const [name, setName] = useState('Bruno')

  return <div>
    <h1>Isso sera exibido?</h1>
    {x && <p>Se x for true, sim!</p>}
    {!x && <p>Agora x e falso!</p>}
    <h1>If ternario</h1>
    {name === 'Gustavo' ? (
        <div>
            <p>O nome e Gustavo</p>
        </div>
    ) : (
        <div>
            <p>Nome nao encontrado!</p>
        </div>
    )}
    <button onClick={() => setName('Gustavo')}>Clica aqui!</button>
  </div>

}

export default ConditionalRender