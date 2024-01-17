import './App.css'

const randomNumbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
console.log(randomNumbers);


function App() {
  return (
    <div>
      <randomNumber numbers={randomNumbers}/>
    </div>
  )
}

export default App
