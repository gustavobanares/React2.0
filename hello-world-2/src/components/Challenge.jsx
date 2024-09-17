const Challenge = () =>{

    const a = 7
    const b = 10
    const soma = a + b


    return(
    <div>
        <p>Esse e o primeiro componente {a}</p>
        <p>Este e o segundo componente {b}</p>
        <button onClick={() => console.log(soma)}>Somar</button>
    </div>
    )
}

export default Challenge