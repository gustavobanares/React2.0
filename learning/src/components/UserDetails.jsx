import React from 'react'

const UserDetails = ({name, age, job}) => {

    
   return( 
   
   <div>
       <h2>{name}</h2>
       <p>Idade: {age}</p>
       <p>Profissao: {job}</p>
       {age >=18 ? (<p>Pode tirar carteira de habilitacao</p>) : (<p>Menor de idade</p>)}
    </div>
  )
}

export default UserDetails