
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header";
import {Todo} from "./components/Todo"

function App() {
  

  return (
    <div className="App">
    <Header />
    <Todo  />
    </div>
  )
}

export default App
