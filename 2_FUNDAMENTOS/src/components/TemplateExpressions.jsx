const TemplateExpressions =() => {
// Tudo que estiver entre chaves e JavaScript

    const name = 'Gustavo'
    const data = {
        age:20,
        job:'Programmer',
    }

    return(
        <div>
            <h1>Ola {name}, tudo bem?</h1> 
            <p>Voce atua como: {data.job}</p>
        </div>
    )
}

export default TemplateExpressions