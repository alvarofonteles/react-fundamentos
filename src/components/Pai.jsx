import Filho from "Filho"

const Pai = () => {
    const pai = 'Álvaro'

    return (
        <div>
            <p>Pai: {pai}</p>
            <Filho />
        </div>
    )
}

export default Pai