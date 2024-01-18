import './App.css'
import RandomNumber from './RandomNumber'
import RowColor from './RowColor'
import ScoreKeeper from './ScoreKeeper'
import EmojiAdder from './EmojiAdder'
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "cyan",
  "magenta",
  "pink",
  "teal",
  "lime",
  "brown",
  "navy",
  "olive",
  "maroon",
  "indigo",
  "turquoise",
  "violet",
  "salmon",
  "khaki"
];

const numbers = [
  1,2,3,4,5,6,7,8,9,10
]

const emojis = ["😊", "🌟", "🚀", "🌈", "🎉", "🍕", "🎸", "🌺", "🐾", "🌍"];

function App() {
  return (
    <div>
      {/* <RowColor colors={colors}/> */}
      {/* <ScoreKeeper/> */}
      <EmojiAdder emojis={emojis}/>
    </div>
  )
}

export default App
