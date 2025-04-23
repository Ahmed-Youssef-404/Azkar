import React from "react";
import Toggle from './Toggle'
import Zekr from "./Zekr";
import './MainStyles.css'
// import '../../../index.css';

export default function Main() {

    const [isDay, setIsEvening] = React.useState(true)

    React.useEffect(() => {
        document.body.className = isDay ? "light-theme" : "dark-theme";
    }, [isDay]);


    function isItDay(data) {
        if (data) {
            console.log("☀️ تم اختيار أذكار الصباح");
            setIsEvening(true)
        } else {
            console.log("✅ تم اختيار أذكار المساء");
            setIsEvening(false)
        }
    }



    return (

        <div className="container">
            <Toggle isDay={isItDay} />
            <Zekr isDay={isDay} />
        </div>
    )
}