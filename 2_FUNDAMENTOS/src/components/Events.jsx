const Events = () =>{
    
    const handleMyEvent = () =>{
        console.log('Ativou o evento')
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>
        } else{
            return <h1>Tambem posso renderizar isso</h1>
        }
    }
    
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou!')}>Clique aqui tambem</button>
            </div>
            <button onClick={() =>{
                if(true){
                    console.log('Isso nao deveria existir')
                }
            }}>Clica aqui por favor</button>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events