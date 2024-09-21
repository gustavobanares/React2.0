import React from 'react'

const UserDetails = ({children, nome, idade, profissao}) => {

    
   return( 
   
   <div>
       {children}
       {idade >= 18 ?(
        <div>
            <p>{nome} tem {idade} anos e sua profissao e: {profissao}, ele tem idade para tirar carta!</p>
        </div>
         ) : (
            <div>
                <p>{nome} tem {idade} e sua profissao e: {profissao}, nao tem idade para tirar carta!</p>
            </div>
       )}
    
    </div>
  )
}

export default UserDetails