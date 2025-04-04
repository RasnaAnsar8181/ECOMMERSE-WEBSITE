import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Toggleswch.css'

function Toggleswch() {
    const [isOn, setIsOn] = useState(false)
    const navigate = useNavigate()
    const handleClick = () => {
        setIsOn(!isOn)
        if(isOn){
            navigate('/App')
        }
    }
    return (
        <div>
            <div className='maindiv'>
                <h1>OPEN WEBSITE</h1>
                <br/>
                <div className='mainSwitch' onClick={handleClick} style={{ backgroundColor: isOn ? 'green' : '' }}>
                    <div className={`Toggleswitch ${isOn ? "on" : "off"}`}>
                        <span className='spanToggle'>{isOn ? 'ON' : 'OFF'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toggleswch
