import logo from './logo.svg';
import './App.css';
function App() {
  const links = ["Services","Projects","About"]
  return (
    <div className="App">
     <Logo/>
     <div className="linkdiv">
     {
       links.map((e)=>{
        return <Links  props={e}/>
       })
     }
     </div>
     <Button/>
    </div>
  );
}

function Logo(){
  return <p className='logobackery'>LOGOBACKERY</p>
}

function Links({props}){
  return <p>{props}</p>
}

function Button(){
  return <button className='contactbtn'>Contact</button>
}

export default App;
