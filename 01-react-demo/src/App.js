import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Box from './Box';

// a hook basically a function imported from React
// that adds extra functionality to a component
import {useState} from "react"

function App() {

  // state variables
  // 1. data or value that are private to the component
  // 2. can be changed by its owning component

  const greeting = <p>What should we have for lunch</p>;
  const colors = ['azure', 'pink', 'orange'];
  const randomColor = colors[Math.floor(Math.random() * 3)];

  const handleClick = ()=>{
    alert("hello world");
  }

  // useState('') register a state variable and set the initial value to ''
  // -> the first argument of useState is the default value of the variable
  // useState return two return values in array
  // index 0: the current value of the state variable
  // index 1: a function to update the state variable value
  const [favoriteFood, setFavoriteFood] = useState('chicken rice');
  const [name, setNames] = useState([]);

  // favoriteFood = "roti prata"; < -- won't work
  // setFavoriteFood("chicken rice"); // <-- this will work

  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
       <div style={{
          "border":"1px solid black",
          "borderRadius":"5px",
          "backgroundColor": randomColor,
          "color":"black"
       }}>
         Warning warning danger ahead
       </div>

      <p>
        My favorite food is {favoriteFood}
      </p>

      <button onClick={()=>{
        setFavoriteFood("rojak")
      }}>Change Food to Rojak</button>

       <Box number="10" bgcolor="blue"></Box>
       <Box number="25" bgcolor="red"></Box>
       <Box number="33"></Box>

       <button onClick={handleClick}>Click me</button>
       <button onClick={()=>{
          alert("TGIF");
       }}>Click me again</button>

       <img src={require("./Bubble_Tea.png")} alt="bubble-tea"/>
        <div>{Math.floor(Math.random() * 10 + 10)}</div>
        <p>
            Good Morning
        </p>
        {greeting}
        
      </header>
    </div>
  );
}

export default App;
