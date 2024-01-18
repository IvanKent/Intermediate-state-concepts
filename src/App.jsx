import './App.css'
import RandomNumber from './RandomNumber'
import RowColor from './RowColor'
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


function App() {
  return (
    <div>
      <RowColor colors={colors}/>
    </div>
  )
}

export default App
