import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function EmojiAdder({emojis}){
    const heart = '❤️';
    const randomIndex = Math.floor(Math.random() * emojis.length)
    const [emoji, setEmoji] = useState([{id: uuidv4(), emoji: emojis[randomIndex]}])

    function addEmoji() {
        const randomIndex = Math.floor(Math.random() * emojis.length)
        setEmoji(oldEmojis => {
            return [...oldEmojis, {id: uuidv4(), emoji: emojis[randomIndex]}]
        })
    }

    function deleteEmoji(id) {
        setEmoji(oldEmojis => {
            return oldEmojis.filter( //copies all of the element that is true
                e => (id !== e.id)
            )
        })
    }

    function replaceHearts() {
        setEmoji(oldEmojis => {
            return oldEmojis.map(e => {
                return {...e, emoji: heart}
            })
        })
    }
    return (
        <div>
            {emoji.map((e) => (
                <span onClick={() => {
                    return deleteEmoji(e.id)
                }} key={e.id} style={{fontSize: '3rem'}}>{e.emoji}</span>
            ))}
            <br />
            <button onClick={addEmoji}>add Emoji</button>
            <button onClick={replaceHearts}>Replace all by hearts</button>
        </div>
    )
}