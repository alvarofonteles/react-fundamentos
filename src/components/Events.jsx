const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log('Você ativou o Evento!')
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Beleza [True], Renderizou aqui.</h1>
        } else {
            return <h2>Ótimo, aqui [False], tbm redenrizou.</h2>
        }
    }

    const cancelarEvent = () => console.log('Ok, deu certo, Cancelado!')

    return (
        <div>
            <div>
                {/** melhor opção */}
                <button onClick={handleMyEvent} >Clique aqui</button> <br />

                {/** dessa maneira dá certo também */}
                <button onClick={() => console.log('Ok, deu certo!')} >Agora clique aqui!</button> <br />

                {/** dessa maneira não é o correto */}
                <button onClick={() => {
                    if (true) { console.log('Tudo bem, não era isso mas ok!') }
                }
                } >Blz, agora nesse.</button>

                <button onClick={cancelarEvent}>Cancelar</button>
            </div>
            {renderSomething(true)} {/** com parentes na função, renderiza hora que abre */}
            {renderSomething(false)}

        </div>
    )
}

export default Events