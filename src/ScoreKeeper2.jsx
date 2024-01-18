import { useState } from "react";
function ScoreKeeper2({players = 2, target = 10}) {
    const playerArray = new Array(players).fill(0)
    const [player, setPlayer] = useState(playerArray)

    // function addScore(id) {
    //     setPlayer(oldPlayerScore => {
    //         const copy = [...oldPlayerScore]
    //         copy[id] +=1;
    //         return copy;
    //     })
    // }

    function addScore(id) { //react way
        setPlayer(oldPlayerScore => {
            return oldPlayerScore.map((e,i) => {
                if(id === i) {
                   return e+=1;
                }
                return e;
            })
        })
    }

    function reset() {
        setPlayer(new Array(players).fill(0))
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            {player.map((e, i) => 
                ( <li key={i}>Player {i+1}: {e} 
                    <button onClick={() => addScore(i)}>Add Score</button>
                    {e >= target ? <h2> You win!</h2> : null}
                </li>

            ))}
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ScoreKeeper2;