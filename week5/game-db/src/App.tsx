import { useState, useEffect } from 'react'
import './App.css'
import Games from './classes/Games';
import AddGameForm from './components/AddGameForm';
import EditGameButton from './components/EditGameButton';
import EditGameForm from './components/EditGameForm';
import GameTable from './components/GameTable'

function App() {
  
  const [games, setGames] = useState<Games[]>([]);

  const fetchGames = () => {
      return fetch('http://localhost:3001/game')
          .then(((res) => res.json()))
          .then((data) => setGames(data))
  }

  useEffect(() => {
      fetchGames();
  },[])

  return (
    <div>
      <GameTable games={games} setGames={setGames} />
      <AddGameForm games={games} setGames={setGames} />
    </div>
  )
}

export default App
