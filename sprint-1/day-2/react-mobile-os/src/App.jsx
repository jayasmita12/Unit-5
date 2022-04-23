import logo from './logo.svg';
import './App.css';
const mobile_variety =["Android","Blackbery","iPhone","Windows Phone"]
const mobile_name=[{name:"Samsung" ,style:"square"},{name:"HTC" ,style:"square"},{name:"Micromax" ,style:"circle"},{name:"Apple",style:"free"}]
function App() {
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
      {
        mobile_variety.map((e)=>{
          return <li>{e}</li>
        })
      }
  </ul>
  <h1>Mobile Manufacturers</h1>
<ul>
  {
    mobile_name.map((e)=>{
      return <li className={e.style}>{e.name}</li>
    })
  }
</ul>
    </div>
  );
}

export default App;