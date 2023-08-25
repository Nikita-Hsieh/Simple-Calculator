import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState("");
  const handleClicked = (e) => {
    setResult(result.concat(e.target.name))
  }

  const reset = () => {
    setResult("");
  }
 
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  }

  const calculate = () => {
    setResult(eval(result).toString());
  }
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div>
      <div class="container">
      <form> 
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="text"
          placeholder="Type a number"
          value={result}
        /> 

        </form>
        
        <div class="keypad">

          <button name="0" onClick={handleClicked}>0</button>
          <button name="1" onClick={handleClicked}>1</button>
          <button name="2" onClick={handleClicked}>2</button>
          <button name="3" onClick={handleClicked}>3</button>
          <button name="4" onClick={handleClicked}>4</button>
          <button name="5" onClick={handleClicked}>5</button>
          <button name="6" onClick={handleClicked}>6</button>
          <button name="7" onClick={handleClicked}>7</button>
          <button name="8" onClick={handleClicked}>8</button>
          <button name="9" onClick={handleClicked}>9</button>
          <button name="+" onClick={handleClicked}>+</button> 
          <button name="-" onClick={handleClicked}>-</button> 
          <button name="*" onClick={handleClicked}>&times;</button> 
          <button name="/" onClick={handleClicked}>&divide;</button> 
          <button id="backspace" onClick={backspace}>DE</button> 
          <button id="reset" onClick={reset}>AC</button> 
          <button id="equal" onClick={calculate}>=</button>

        </div>
      </div>


    </div> 
  ); 
} 
 
export default App; 
