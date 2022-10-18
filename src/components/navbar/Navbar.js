import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="heading">
                <Link to={"/"} className="navLink">
                    <img src="/img/logo.png" style={{width:"350px",height:"50px"}} />
                </Link>
            </div>
            <div className="items">
                <div className="link">
                    <Link to={"/marketplace"} className="navLink" >
                        Marketplace
                    </Link>
                </div>
                <div className="link">
                    <Link to={"/leaderboard"} className="navLink">
                        Leaderboard
                    </Link>
                </div>
            </div>
            <div className="profile">
                <div className="profile-img profile-items">
                    <img src="/img/logo192.png" style={{ width: "25px", background: "black", borderRadius: "50%", padding: "3px" }} />
                </div>
                <div className="profile-item">
                    <div className="profile-username profile-items">
                        Wallet ID
                    </div>
                    <div className="profile-button profile-items">
                        <img src="/img/down-arrow.png" alt=""  />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar