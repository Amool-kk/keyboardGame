import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/dashboard/Dashboard';
import Leaderboard from './pages/leaderboard/Leaderboard';
import Tournament from './pages/tournament/Tournament';

function App() {
  const [userName,setUserName] = useState(null);

  useEffect(()=>{
    console.log(userName)
  },[userName])

  return (
    <div className="App">
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/tournament' element={<Tournament/>}/>
      </Routes>
    </div>
  );
}

export default App;
