import { useState } from "react"
import './bg.css'

export default function RandomNumber({colors}) {
    const randomIndex =  Math.floor(Math.random() * colors.length)
    const [color, setColor] = useState(colors[randomIndex]); //sets the initial color state 

    const changeColor = () => {
        const idx = Math.floor(Math.random() * colors.length)
        const randomColor = colors[idx]
        setColor(randomColor)

    }

    return (
        <div onClick={changeColor} className="box" style={{background: color}}>
        </div>
    )
}