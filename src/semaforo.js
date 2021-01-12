import React, { useState } from 'react'

function Semaforo() {

    const [red, setRed] = useState('light-red-off btn traffic-light-circles')
    const [yellow, setYellow] = useState('light-yellow-off btn traffic-light-circles')
    const [green, setGreen] = useState('light-green-off btn traffic-light-circles')

    const redlight = () => {
        setRed('light-red-on btn traffic-light-circles')
        setYellow('light-yellow-off btn traffic-light-circles')
        setGreen('light-green-off btn traffic-light-circles')
    }
    const yellowlight = () => {
        setYellow('light-yellow-on btn traffic-light-circles')
        setRed('light-red-off btn traffic-light-circles')
        setGreen('light-green-off btn traffic-light-circles')
    }
    const greenlight = () => {
        setGreen('light-green-on btn traffic-light-circles')
        setRed('light-red-off btn traffic-light-circles')
        setYellow('light-yellow-off btn traffic-light-circles')
    }

    return (
        <>
            <div className='traffic-light-support bg-darkgray mx-auto'></div>
            <div className='traffic-light-body bg-darkgray mx-auto justify-content-around align-items-center'>
                <div>
                    <button onClick={redlight} type="button" className={red}></button>
                </div>
                <div>
                    <button onClick={yellowlight} type="button" className={yellow}></button>
                </div>
                <div>
                    <button onClick={greenlight} type="button" className={green}></button>
                </div>
            </div>
        </>
    )
}

export default Semaforo