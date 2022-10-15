import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Tournament.css'
import Slider from 'react-slider-modal';
import 'animate.css/animate.min.css'

const Tournament = () => {

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
                    <div className="sliderHeader" >CONFIRM REGISTRATION</div>
                    <div className="sliderBody">
                        <li>
                            <p className='slider-content white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum a ea qui obcaecati iste facilis ipsum temporibus magnam vitae.</p>
                        </li>
                        <li>
                            <p className="slider-content white">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde minima ratione perspiciatis, reiciendis tempora odio laudantium officia error adipisci provident!
                            </p>
                        </li>
                        <li>
                            <p className="slider-content white">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde minima ratione perspiciatis, reiciendis tempora odio laudantium officia error adipisci provident!
                            </p>
                        </li>
                        <li>
                            <span>
                                <input type="checkbox" name="" />
                                <label htmlFor="">I hereby accept the rules of the tournament.</label>
                            </span>
                        </li>
                        <li>
                            <button style={{width:"100%"}} onClick={toggleModal}>ENTER TORUNAMENT</button>
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
                    <div className="tournament_details">
                        <div style={{ display: "flex" }}>
                            <div className="tournament_items">
                                <div>
                                    Registered
                                </div>
                                <div className="value">
                                    1000
                                </div>
                            </div>
                            <div className="tournament_items">
                                <div>
                                    Total Bet Amount
                                </div>
                                <div className="value">
                                    564 <span>KH</span>
                                </div>
                            </div>
                        </div>
                        <div className="tournament_items items">
                            <button onClick={toggleModal}>REGISTER</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="tournament_timer">
                        <div className="tournament_heading">
                            BETTING PHASE ENDS IN
                        </div>
                        <div id="countdown">
                            <ul>
                                <li><span id="days">02 :</span><p>DAYS</p></li>
                                <li><span id="hours">21 :</span>HOURS</li>
                                <li><span id="minutes">25 :</span><p>MINS</p></li>
                                <li><span id="seconds">30</span><p>SECS</p></li>
                            </ul>
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

export default Tournament