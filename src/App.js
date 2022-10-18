import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/dashboard/Dashboard';
import Leaderboard from './pages/leaderboard/Leaderboard';
import Tournament_R from './pages/tournament/Tournament-Registration';
import Tournament from './pages/tournament/Tournament';

function App() {
  const [userName,setUserName] = useState(null);

  useEffect(()=>{
    console.log(userName)
  },[userName])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/tournament-registration' element={<Tournament_R/>}/>
        <Route path='/tournament' element={<Tournament/>} />
      </Routes>
    </div>
  );
}

export default App;
