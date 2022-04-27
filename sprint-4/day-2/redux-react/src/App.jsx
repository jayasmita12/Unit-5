
import './App.css'
import { store } from './redux/store'
import { addcount } from './redux/action'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const dispatch = useDispatch()
  const counter= useSelector((store)=>{store.counter})
  
// const store = store.getstate()
  return (
    <div className="App">
      <h1>Counter :{counter}</h1>
      <button onClick={dispatch(addcount(1))}>ADD</button>
    </div>
  )
}

export default App
