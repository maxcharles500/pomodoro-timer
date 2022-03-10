import React, {useState, useEffect} from 'react'
import {getRemainingTimeInTimer} from './countDownTimerUtils'
const defaultRemainingTime = {
    hours: '00',
    minutes: '00',
    seconds: '00',
}

function Timers({}) {
    const [focusTime, setFocusTime] = useState(1500000);
    const [shortBreak, setShortBreak] = useState(300000);
    const [longBreak, setLongBreak] = useState(900000);
    const [timeRemaining, setTimeRemaining] = useState(defaultRemainingTime);
    let [countdownMs, setCountdownMs] = useState(1500000)

    // const setClock = () => {
    //     if(!!focusTime){
    //         setCountdownMs(1500000)
    //     }else if(!!shortBreak){
    //         setCountdownMs(300000)
    //     }else if(!!longBreak){
    //         setCountdownMs(900000)
    //     }else{
    //         setCountdownMs(1500000)
    //     }
      
    // }

    const focusClick = () => {
        setCountdownMs(focusTime)
    }
    const shortBreakClick = () => {
       setCountdownMs(shortBreak)
    }
    const longBreakClick = () => {
        setCountdownMs(longBreak)
    }
    

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownMs);
            setCountdownMs(countdownMs -= 1000) 
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownMs])

    function updateRemainingTime(countdown) {
       setTimeRemaining(getRemainingTimeInTimer(countdown))
      
       
    }


  return (
    <div>
        <button onClick={focusClick}>Focus</button>
        <button onClick={shortBreakClick}>Short Break</button>
        <button onClick={longBreakClick}>Long Break</button>
        <br />
        <span>{timeRemaining.hours}:</span>
        <span>{timeRemaining.minutes}:</span>
        <span>{timeRemaining.seconds}</span>
    </div>
  )
}

export default Timers