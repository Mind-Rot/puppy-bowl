import { Routes, Route} from 'react-router-dom'
import './App.css'
import SinglePlayer from './Components/SinglePlayer'
import Nav from './Components/Nav'

function App() {
  return <div className="App">
       <Nav />
    <Routes>
      <Route path="/" element={<AllPlayers />}/>
      <Route path="/players/:id" element={<SinglePlayer />}/>
      <Route path="/createPup" element={<createPuppyForm />}/>
    </Routes>
  </div>
}

export default App
