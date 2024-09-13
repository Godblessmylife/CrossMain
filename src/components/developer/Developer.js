import React from 'react'
import './Developer.css'
import Terminal from '../../assets/terminal.png'

const Developer = () => {
    return (
        <div className='developers'>
            <div className="container">
                <div className="left">
                    <h2>CrossfiGod have job for you!</h2>
                    <p>Need x2 DevOps If you want to join our team, you will have to go through video authentication and KYC</p>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img src={Terminal} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developer
