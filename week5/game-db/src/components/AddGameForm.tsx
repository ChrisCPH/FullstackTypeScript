import { useState } from "react"
import Game from "../classes/Games"
import MakeOptions from "./MakeOptions"


const AddGameForm = ({games, setGames}:{games:Game[], setGames:React.Dispatch<React.SetStateAction<Game[]>>}) => {

    const [input, setInput] = useState({name:"", price: 0, developer:"", publisher:"", release_date:"", platform:""})

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const handleClick = (event:React.MouseEvent<HTMLButtonElement>):void => {
        event.preventDefault();
        const newGame = new Game(games.length + 1, input.name, input.price, input.developer, input.publisher, input.release_date, input.platform.split(" "))
        const options = MakeOptions("POST", newGame);
        fetch('http://localhost:3001/game',options);
        games.push(newGame);
        setGames([...games])
        setInput({name:"", price: 0, developer:"", publisher:"", release_date:"", platform:""});
    }

    return (
        <div>
            <form>
                <h3>Add Game</h3>
                <input type="text" placeholder="Name" onChange={handleChange} value={input.name} name="name"></input>
                <input type="number" placeholder="Price" onChange={handleChange} value={input.price} name="price"></input>
                <input type="text" placeholder="Developer" onChange={handleChange} value={input.developer} name="developer"></input>
                <input type="text" placeholder="Publisher" onChange={handleChange} value={input.publisher} name="publisher"></input>
                <input type="text" placeholder="Release date" onChange={handleChange} value={input.release_date} name="release_date"></input>
                <input type="text" placeholder="Platform" onChange={handleChange} value={input.platform} name="platform"></input>
            </form>
            <button onClick={handleClick}>
                Add game
            </button>
        </div>
    )
}

export default AddGameForm