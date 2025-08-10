import { useState, useEffect, use } from "react";
import "./ToggleStyles.css"

export default function Toggle(props) {
    const [isDay, setIsDay] = useState(undefined);

    useEffect(() => {
        const currentTime = new Date().getHours()
        const isDayTime = (currentTime >= 5 && currentTime <= 16) ? true : false
        setIsDay(isDayTime)
    }, [])


    console.log("2")

    useEffect(() => {
        props.isDay(isDay);
    }, [isDay])

    function handleToggle() {
        setIsDay(prev => !prev)
    }

    return (
        <div className="toggle">
            <span>أذكار الصباح</span>
            <label htmlFor="toggle" className="label">
                <input
                    type="checkbox"
                    id="toggle"
                    className="input"
                    // checked={isDay}
                    checked={isDay !== undefined ? isDay : false}
                    onChange={handleToggle}
                />
                <div className="toggle-wrapper">
                    <span className="selector"></span>
                </div>
            </label>
            <span>أذكار المساء</span>
            {/* <span>{currentTime}</span> */}
        </div>
    );
}



// setCurrentTime(`${hours}:${minutes}:${seconds}`)











// let isDayTime = null
// useEffect(() => {
//     const updateTime = () => {
//         // const now = new Date()
//         // const hours = now.getHours();
//         // let hours = 10;
//         setCurrentTime(hours)
//         console.log(currentTime)
//     }

//     const interval = setInterval(updateTime, 1000);

//     isDayTime = (currentTime >= 0 && currentTime < 13) ? false : true


//     return () => clearInterval(interval)
// }, [])