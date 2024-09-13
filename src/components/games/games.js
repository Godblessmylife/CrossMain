import React from 'react'
import MainVideo from '../../assets/gamesbg.gif'
import tetris_img from '../../assets/photo_2024-07-07_20-48-13-YNqr2Ogx40holyND.avif'
import './games.css'

const game = () => {
    return (
        <div className='game'>
            <img src={MainVideo} alt="Gameplay Background" id='video1' />
            <div class="game-flexbox"> 
                <img class="tetris_img" src={tetris_img} alt=""></img>
                <div className="game-text">
                    <div className="tittle-group">
                        <h1><span className="blue">Tetris Revolution:</span></h1>
                        <h1>Play and Earn Real Crypto coin on CrossFi Blockchain</h1>
                    </div>
                    <p>Tetris WEB3, where classic gameplay meets the innovative world of Web3!
                    Now you can earn XFI coins as you stack, strategize, and clear lines, transforming your gaming skills into real rewards.
                    Our platform offers a unique blend of fun and profit, empowering players to thrive in an exciting decentralized environment!
                    Join us today and experience the future of gaming where every move counts towards your success!</p>
                    <div className="btn-group">
                        <a className='btn' href="https://t.me/TetrisCrossfi_Bot?start=Njk1NTI0NTE3MA">Start game</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default game
