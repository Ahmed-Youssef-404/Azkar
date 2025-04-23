import React from "react";
import data from '../../assets/data.json'


export default function Zekr(props) {

    const may = data.map((oneZekr) => {
        const [count, setCount] = React.useState(oneZekr.count);


        function handleCount() {
            setCount(prev => prev - 1);
        }

        let updatedZekr = oneZekr

        const isEvening = !props.isDay

        if (oneZekr.id === 0 && !isEvening) {
            return null;
        }

        if (oneZekr.id === 5 && isEvening) {
            updatedZekr = {
                ...oneZekr,
                theText: oneZekr.theText
                    .replace("أَصْـبَحْنا وَأَصْبـحَ", "أَمْسَيْـنا وَأَمْسـى")
                    .replace(/هـذا اليوم/g, "هـذهِ اللَّـيْلَةِ")
                    .replace(/بَعْـدَه/g, "بَعْـدَهـا")
            }
        } else if (oneZekr.id === 8 && isEvening) {
            updatedZekr = {
                ...oneZekr,
                theText: oneZekr.theText
                    .replace("أَصْبَـحْتُ", "أَمسيتُ")
            }
        } else if (oneZekr.id === 9 && isEvening) {
            updatedZekr = {
                ...oneZekr,
                theText: oneZekr.theText
                    .replace("أَصْبَـحَ", "أَمسى")
            }
        } else if (oneZekr.id === 12 && isEvening) {
            updatedZekr = {
                ...oneZekr,
                theText: oneZekr.theText
                    .replace("أَصْـبَحْنا وَبِكَ أَمْسَـينا", "أَمْسَـينا وَبِكَ أَصْـبَحْنا")
                    .replace("النُّـشُور", "الْمَصِيرُ")
            }
        } else if (oneZekr.id === 13 && isEvening) {
            updatedZekr = {
                ...oneZekr,
                theText: oneZekr.theText
                    .replace("أَصْبَـحْـنا", "أَمْسَـينا")
            }
        } else if (oneZekr.id === 19 && isEvening) {
            updatedZekr = {
                ...oneZekr,
                theText: oneZekr.eveningText
            }
        }


        return (
            <div className="holder" key={updatedZekr.id}>
                <div onClick={count > 0 ? handleCount : null} className={`zekr ${count === 0 ? "done" : ""} ${updatedZekr.aya ? "isAya" : ""}`}>
                    <p>{updatedZekr.theText}</p>
                    <button>{count === 0 ? "✔" : count}</button>
                </div>
            </div>
        );
    });

    return (
        <>
            {may}
        </>
    )
}



// <div className="holder">
//     <div className={`zekr ${count === 0 ? "done" : ""}`}>
//         <p>سبحان الله وبحمده ... سبحان الله العظيم</p>
//         <button onClick={handleCount} disabled={count === 0}>{count === 0 ? "✅" : count}</button>
//     </div>
// </div>