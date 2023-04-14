
import './App.css'
import AddFriends from './components/AddFriends.jsx'
import GetFriends from './components/GetFriends.jsx'
import { useState } from 'react'

function App() {
 // const [refresh, setRefresh] = useState(false);

  return (
    <div className="App">
      <AddFriends />
      <GetFriends />
    </div>
  )
}

export default App
