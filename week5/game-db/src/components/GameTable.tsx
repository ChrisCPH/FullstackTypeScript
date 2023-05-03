import Game from '../classes/Games';
import EditGameButton from './EditGameButton';
import EditGameForm from './EditGameForm';
import RemoveGameButton from './RemoveGameButton';

const GameTable = ({games, setGames}:{games:Game[], setGames:React.Dispatch<React.SetStateAction<Game[]>>}) => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Developer</th>
                    <th>Publisher</th>
                    <th>Release date</th>
                    <th>Platform</th>       
                </tr>
                </thead>
        {games.map((game) => {
            return (
                <tbody key={game.id}>
                <tr>
                    <td>{game.id}</td>
                    <td>{game.name}</td>
                    <td>{game.price}€</td>
                    <td>{game.developer}</td>
                    <td>{game.publisher}</td>
                    <td>{game.release_date}</td>
                    <td>{game.platform}</td>
                    <td><RemoveGameButton gameId={game.id} games={games} setGames={setGames} /></td>
                    <td><EditGameButton game={[game.id, game.name, game. price, game.developer, game.publisher, game.release_date, game.platform.toString()]} /></td>
                </tr>
                </tbody>    
            );
        })}
        </table>
    </div>
    )
}

export default GameTable