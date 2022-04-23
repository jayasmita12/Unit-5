import logo from './logo.svg';
import {useState} from"react"


function App() {
  const [counter,setCounter] = useState(0)

  const count =(num)=>{
      setCounter(counter+num)
  }

  const getdouble=(number)=>{
      setCounter(counter * number)
  }

  return (
    <div className="App">
     <h2 className={counter%2 === 0 ? "greenclr":"redclr"}>Counter:{counter}</h2>
     <button onClick={()=>count(+1)}>Increment (+)</button>

    <button onClick={()=>count(-1)}>Decrement (-)</button>

    <button onClick={()=>getdouble(2)}>Double</button>
    </div>
  );


}

export default App;
