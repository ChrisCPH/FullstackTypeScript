import { useState } from "react"
import Game from "../classes/Games"
import MakeOptions from "./MakeOptions"

const EditGameButton = ({game}:{game: [number, string, number, string, string, string, string]}) => {

    const [input, setInput] = useState({id: 0, name:"", price: 0, developer:"", publisher:"", release_date:"", platform:""})

    const [clicked, setClicked] = useState(false)

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const editGameForm = () => {
        return (
            <div>
                <form>
                    <h3>Edit Game</h3>
                    <input type="number" placeholder="Id" onChange={handleChange} value={input.id} name="id"></input>
                    <input type="text" placeholder="Name" onChange={handleChange} value={input.name} name="name"></input>
                    <input type="number" placeholder="Price" onChange={handleChange} value={input.price} name="price"></input>
                    <input type="text" placeholder="Developer" onChange={handleChange} value={input.developer} name="developer"></input>
                    <input type="text" placeholder="Publisher" onChange={handleChange} value={input.publisher} name="publisher"></input>
                    <input type="text" placeholder="Release date" onChange={handleChange} value={input.release_date} name="release_date"></input>
                    <input type="text" placeholder="Platform" onChange={handleChange} value={input.platform} name="platform"></input>
                </form>
            </div>
        )
    }

    const handleClick = (event:React.MouseEvent<HTMLButtonElement>):void => {
        setInput({id: game[0], name: game[1], price: game[2], developer: game[3], publisher: game[4], release_date: game[5], platform: game[6]})
        setClicked(true);
    }

    return (
        <div>
            <button onClick={handleClick}>
                Edit
            </button>
        </div>
    )
}

export default EditGameButton