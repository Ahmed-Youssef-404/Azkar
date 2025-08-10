import { useState, useEffect } from "react";
import Toggle from "./Toggle/Toggle";
import ZekrsContainer from "./ZekrsContainer/ZekrsContainer";
import './MainStyles.css'

export default function Main() {

    const [isDay, setIsDay] = useState(true)

    useEffect(() => {
        const bodyClasses = document.body.classList;

        bodyClasses.add(isDay ? "light-theme" : "dark-theme")

        return () => {
            bodyClasses.remove("dark-theme");
            bodyClasses.remove("light-theme");
        };
    }, [isDay]);

    console.log("1")

    return (
        <div className="container">
            <Toggle isDay={(day => { setIsDay(day) })} />
            <ZekrsContainer isDay={isDay} />
        </div>
    )
}   