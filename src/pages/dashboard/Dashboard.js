import React, { useState } from 'react'
import Slider from 'react-slider-modal';
import 'animate.css/animate.min.css'
import './dashboard.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom';





const Dashboard = () => {
    const [slideShow, setSlideShow] = useState(false)

    const toggleModal = () => {
        setSlideShow(!slideShow);
    }

    const sliderData = () => {
        return (
            <>
                <div className="slider-container">
                    <div className="closeBtn" onClick={(e) => setSlideShow(!slideShow)}>
                        <img src="/img/closeBtn.png" alt="" />
                    </div>
                    <div className="sliderHeader">Choose Game</div>
                    <div className="sliderBody">
                        <li>
                            <div>
                                <div className="slider-header">Tournament</div>
                                <img src="/img/arrow.png" style={{ position: "absolute", top: "9.4rem", right: "20px" }} />
                            </div>
                            <p className='slider-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum a ea qui obcaecati iste facilis ipsum temporibus magnam vitae.</p>
                            <Link to='/tournament'><button>PLAY</button></Link>
                        </li>
                        <hr />
                        <li>
                            <div>
                                <div className="slider-header">
                                    vs Computer
                                </div>
                                <img src="/img/arrow.png" style={{ position: "absolute", top: "23.7rem", right: "20px" }} />
                            </div>
                            <p className="slider-content">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde minima ratione perspiciatis, reiciendis tempora odio laudantium officia error adipisci provident!
                            </p>
                            <button onClick={toggleModal}>PLAY</button>
                        </li>
                        <hr />
                        <li>
                            <div>
                                <div className="slider-header">
                                    vs Player
                                </div>
                                <img src="/img/arrow.png" style={{ position: "absolute", top: "37.8rem", right: "20px" }} />
                            </div>
                            <p className="slider-content">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde minima ratione perspiciatis, reiciendis tempora odio laudantium officia error adipisci provident!
                            </p>
                            <button onClick={toggleModal}>PLAY</button>
                        </li>
                    </div>
                </div>
            </>

        )
    }

    return (
        <>
            <div className="cont">
                <div className="main-cont">
                    <Navbar />
                    <div className="game_details">
                        <div className="user_avatar detailsitems">

                        </div>
                        <div className="user_details detailsitems">
                            <div className="user">
                                <div className="user_name">
                                    Electron
                                </div>
                                <div className="user_social">
                                    <div className="social">
                                        <img src="/img/twitter.png" />
                                    </div>
                                    <div className="social">
                                        <img src="/img/social.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="user_other_details">
                                <div className="items">
                                    <div>
                                        Typist Rank
                                    </div>
                                    <div className="rank">
                                        11024
                                    </div>
                                </div>
                                <div className="items">
                                    <div>
                                        Tournament Rank
                                    </div>
                                    <div className="rank">
                                        120
                                    </div>
                                </div>
                                <div className="items">
                                    <div>
                                        Bets Left for today
                                    </div>
                                    <div className="rank">
                                        120KH
                                    </div>
                                </div>
                                <div className="items">
                                    <div>
                                        Matches Left
                                    </div>
                                    <div className="matches">
                                        1
                                    </div>
                                </div>
                                <div className="items">
                                    <div>
                                        Balance
                                    </div>
                                    <div className="rank">
                                        1011KH
                                    </div>
                                </div>
                                <div className="items">
                                    <button onClick={toggleModal}>PLAY</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="tournament">
                        <div className="container-items">
                            <li>My NFTs</li>
                            <li>History</li>
                        </div>
                        <div className="container-items">
                            <div className="card">
                                <div className="card-item">
                                    <div className="card_name card-items">
                                        Tournament #167
                                    </div>
                                    <div className="time card-items">
                                        04:21:35 14
                                    </div>
                                </div>
                                <button>Go To Tournamnet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Slider
                id="demoID2"
                animation="slide"
                speed="fast"
                toggle={slideShow}
                sliderStyle={{
                    "width": "500px",
                    "height": "100%",
                    "top": "0px"
                }}
                closeModal={() => { setSlideShow(!slideShow) }}
                direction="left"
                render={sliderData()} />
        </>
    )
}

export default Dashboard