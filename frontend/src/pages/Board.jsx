import Feed from "../components/Feed"
import MessageField from "../components/MessageField"

const Board = () => {
    return (
        <>
            <h1>Board</h1>
            <MessageField />
            <Feed title="Последние сообщения" />
        </>
    )
}

export default Board
