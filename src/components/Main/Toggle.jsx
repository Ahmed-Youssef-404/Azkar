import React from "react";
import "./ToggleStyles.css"

export default function Main(props) {


    const [day, setIsChecked] = React.useState(true);

    function handleToggle() {
        const newValue = !day;
        setIsChecked(newValue);
        props.isDay(newValue);
    }
    

    return (
        <div className="toggle">
            <span>أذكار الصباح</span>
            <label htmlFor="toggle" className="label">
                <input
                    type="checkbox"
                    id="toggle"
                    className="input"
                    checked={day}
                    onChange={handleToggle}
                />
                <div className="toggle-wrapper">
                    <span className="selector"></span>
                </div>
            </label>
            <span>أذكار المساء</span>
        </div>
    );
}