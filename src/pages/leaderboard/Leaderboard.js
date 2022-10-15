import React, { useState } from 'react'
import './leaderboard.css'
import Navbar from '../../components/navbar/Navbar'

const Leaderboard = () => {
    const [loading, setLoading] = useState(false);
    const [players, setPlayers] = useState([{"name":"amool","rank":3,"wins":10,"loss":10,"bets won":10},{"name":"amool","rank":3,"wins":10,"loss":10,"bets won":10}])

    return (
        <div className="cont">
            <div className="main-cont">
                <Navbar />
            </div>
            <div className="container">
                <div className="leaderboard">
                    <div className="leaderboardTable">
                        <div className=""></div>
                        <div className="tableHead">
                            <li className="NO">#</li>
                            {/* <li>Name</li> */}
                            <li className="Playavatar">TYPIST USER NAME</li>
                            <li>RANK</li>
                            <li>WINS</li>
                            <li>LOSS</li>
                            <li>BETS WON</li>
                        </div>
                        <>
                            {players.map((play, i) => (
                                <div key={i} className="tableBody">
                                    <div key="row" className="row">
                                        <li key="no" className="NO">
                                            {i + 1}
                                        </li>
                                        <li className="Playavatar" key="name">
                                            <img src={play.avatar} className="user_avatar" alt=""></img>
                                            {play.name}
                                        </li>
                                        <li>{play.rank}</li>
                                        <li>{play.wins}</li>
                                        <li>{play.loss}</li>
                                        <li>{play['bets won']}</li>
                                    </div>
                                </div>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard