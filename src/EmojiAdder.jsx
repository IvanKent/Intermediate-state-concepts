import { useState } from "react"

export default function EmojiAdder({emojis}){
    const randomIndex = Math.floor(Math.random() * emojis.length)
    const [emoji, setEmoji] = useState([emojis[randomIndex]])

    function addEmoji() {
        const randomIndex = Math.floor(Math.random() * emojis.length)
        setEmoji(oldEmojis => {
            return [...oldEmojis, emojis[randomIndex]]
        })
    }
    return (
        <div>
            {emoji.map((e) => (
                <span>{e}</span>
            ))}
            <br />
            <button onClick={addEmoji}>add Emoji</button>
        </div>
    )
}