
import {Routes,Route} from "react-router-dom" 
import { useContext, useState } from 'react'
import {Navbar} from "./components/Navbar"
import { Users } from "./components/Users"
import {Login} from "./components/Login"
import {Home} from "./components/Home"
import { SingleUser } from "./components/SingleUser"
import {Privateprovider} from "./components/Privateprovider"



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users/:id" element={
        <Privateprovider>
          <SingleUser />
        </Privateprovider>}></Route>
      </Routes>
    </div>
  )
}

export default App
