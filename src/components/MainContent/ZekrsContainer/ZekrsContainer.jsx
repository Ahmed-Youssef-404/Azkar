import { useState, useEffect } from 'react';
// import Zekr from "./OneZekr/Zekr";
import './ZekrsContainerStyels.css'
import data from '../../../assets/data.json'


function Zekr(props) {

    const oneZekr = props.zekr

    const [counter, setCounter] = useState(oneZekr.count);

    const [isDone, setISDone] = useState(false)

    // Rest every Zekr when toggling day or evening
    useEffect(() => {
        setCounter(oneZekr.count)
        setISDone(false)
    }, [props.isDay])

    // add "done" class to the Zekr if the counter is 0
    useEffect(() => {
        if (counter === 0) setISDone(true)
    }, [counter])

    // Reduce the counter by 1 when clicke
    function handleCounter() {
        setCounter(prev => prev - 1);
    }

    const isEvening = !props.isDay

    // Skip the "evening-only" zekr when not in evening
    if (oneZekr.eveningOnly && !isEvening) {
        return null;
    }

    let updatedZekr = oneZekr

    // Convert the text to evening text if must
    if (isEvening && "eveningText" in oneZekr) {
        let newText = oneZekr.theText;
        if (typeof oneZekr.eveningText === "string") {
            newText = oneZekr.eveningText;
        } else if (typeof oneZekr.eveningText === "object") {
            oneZekr.eveningText.forEach(({ from, to }) => {
                newText = newText.replace(new RegExp(from, 'g'), to);
            });
        }
        updatedZekr = { ...oneZekr, theText: newText };
    }

    return (
        <div className="holder" key={updatedZekr.id}>
            <div onClick={counter > 0 ? handleCounter : null} className={`zekr ${isDone ? "done" : ""} ${updatedZekr.aya ? "isAya" : ""}`}>
                <p >{updatedZekr.theText}</p>
                <button>{(counter === 0 ? "✔" : counter)}</button>
            </div>
        </div>
    )
}


export default function AllZekrs(props) {
    return (
        <>
            {data.map((oneZekr) => {
                return <Zekr
                    key={oneZekr.id}
                    zekr={oneZekr}
                    isDay={props.isDay}
                />
            })}
        </>
    )
}