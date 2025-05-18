const TemplateExpressions = () => {
    const nome = 'Álvaro 👨‍💻'
    var dados = {
        idade: 41,
        cargo: 'Dev FullStack'
    }

    return (
        <div>
            Meu nome é {nome}, e atualmente estou como {dados.cargo} 
            <p>{console.log(nome)}</p>
        </div>        
    )
}

export default TemplateExpressions