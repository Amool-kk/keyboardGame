import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const Tournament = () => {
    return (
        <>
            <div className="cont">
                <div className="main-cont">
                    <Navbar />
                    <div className="tournament_details" style={{ marginTop: "120px" }}>
                        <div style={{ display: "flex" }}>
                            <div className="tournament_items">
                                <div>
                                    Registered
                                </div>
                                <div className="value">
                                    1200
                                </div>
                            </div>
                            <div className="tournament_items">
                                <div>
                                    Total Bet Amount
                                </div>
                                <div className="value">
                                    564 <span style={{ fontSize: "20px" }} >KH</span>
                                </div>
                            </div>
                        </div>
                        <div className="tournament_items items">
                            <div className='timer'>
                                <div className="tournament_heading">
                                    BETTING PHASE ENDS IN
                                </div>
                                <div id="countdown">
                                    <ul>
                                        <li><span id="days">02 :</span><p>DAYS</p></li>
                                        <li><span id="hours">21 :</span><p>HOURS</p></li>
                                        <li><span id="minutes">25 :</span><p>MINS</p></li>
                                        <li><span id="seconds">30</span><p>SECS</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="cont">
                    <div className="container_items">
                        <div className="user_profile">

                        </div>
                        <div className="user_name">
                            Rex11
                        </div>
                        <div className="user_bet">
                            Current Bet : 0
                        </div>
                        <button>BET</button>
                    </div>
                    <div className="container_items">
                        <div className="heading">
                            Participant
                        </div>
                        <div className="bets_table">
                            <div className="row">
                                <ul>
                                    <li>
                                        <div className="user_profile"></div>
                                    </li>
                                    <li>
                                        <div className="user_details">
                                            <div className="user_name">
                                                Zobin
                                            </div>
                                            <div className="view_profile">
                                                View Profile
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            Bet Amount
                                        </div>
                                        <div className="value">
                                            51 <span style={{ fontSize: "20px" }} >KH</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <ul>
                                    <li>
                                        <div className="user_profile"></div>
                                    </li>
                                    <li>
                                        <div className="user_details">
                                            <div className="user_name">
                                                Zobin
                                            </div>
                                            <div className="view_profile">
                                                View Profile
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            Bet Amount
                                        </div>
                                        <div className="value">
                                            51 <span style={{ fontSize: "20px" }} >KH</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container_items">
                        <div className="items">
                            Assemble your powerups for the tournament. Visit the Marketplace for powerups.
                        </div>
                        <div className="items">
                            <button>Go to Marketplace</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tournament