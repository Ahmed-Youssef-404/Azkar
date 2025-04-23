import React from "react";
import Toggle from './Toggle'
import Zekr from "./Zekr";
import './MainStyles.css'
// import '../../../index.css';

export default function Main() {

    const [isDay, setIsDay] = React.useState(true)

    React.useEffect(() => {
        document.body.className = isDay ? "light-theme" : "dark-theme";
    }, [isDay]);

    function isItDay(day) {
        if (day) {
            console.log("الصباح");
            setIsDay(true)
        } else {
            console.log("المساء");
            setIsDay(false)
        }
    }

    return (

        <div className="container">
            <Toggle isDay={isItDay} />
            <Zekr isDay={isDay} />
        </div>
    )
}