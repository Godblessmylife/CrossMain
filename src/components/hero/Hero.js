import React from 'react'
import MainVideo from '../../assets/video.mp4'
import './Hero.css'

const hero = () => {
    return (
        <div className='hero'>
            <div class="video-container">
                <video autoPlay loop muted id='video'>
                    <source src={MainVideo} type='video/mp4' />
                </video>
            </div>
            <div className="hero-text">
                <h1>Decentralized</h1>
                <h1>Trading Ecosystem</h1>
                <p>Welcome to Staking , Farming , Gaming , Minting with web 3+  Multichain Bridge for all Blockchain Right Now.</p>
                <p>Guaranteed liquidity trading and top EVM and Multichain applications.</p>
                <div className="btn-group">
                    <a className='btn btn-outline' href="https://minter.crossfigod.io/router-evm/">Launch App</a>
                    {/* <button className="btn btn-outline">Documentation</button> */}
                    <button className="btn btn-outline">FAQ</button>
                </div>
            </div>
            <div className="bottom-text">
                <h2>site created by Atilla</h2>
            </div>
        </div>
    )
}

export default hero
