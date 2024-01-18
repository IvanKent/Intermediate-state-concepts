import './App.css'
import RandomNumber from './RandomNumber'
import RowColor from './RowColor'
import ScoreKeeper from './ScoreKeeper'
import EmojiAdder from './EmojiAdder'
import ScoreKeeper2 from './ScoreKeeper2'
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
      {/* <EmojiAdder emojis={emojis}/> */}
      <ScoreKeeper2 players={10}/>
    </div>
  )
}

export default App
