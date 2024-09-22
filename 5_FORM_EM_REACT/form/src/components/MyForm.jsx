import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // 6 - controlled inputs
    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : null) 
    const [email, setEmail] = useState(user ? user.email : null) 

    const handleName = (e) =>{
        setName(e.target.value)
    }

    // console.log(name)
    // console.log(email)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('Enviando o formulario')
        console.log(name, email)

        // validacao
        // envio

        // 7 - limpar form
        setName('')
        setEmail('')
    }


  return (
    <div>
        {/* 5 - envio de form */}
        {/* 1 - criacao de forms */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite seu nome" 
                onChange={handleName}
                value={name} />
            </div>
            {/* 2- label envolvendo input */}
            <label>
                <span>E-mail</span>
                {/* 4 - simplificacao de manipulacao de state */}
                <input 
                type="email" 
                name='email' 
                placeholder='Digite o seu e-mail' 
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            </label>
            <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default MyForm