import Filho from './Filho'

const Pai = () => {
    const pai = 'Álvaro'

    return (
        <div>
            Pai: {pai}
            <Filho />
        </div>
    )
}

export default Pai