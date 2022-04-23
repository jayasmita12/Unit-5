import "../App.css";

import {useState} from "react"

 function Inventory() {
  const [book, setBook] = useState(9);
  const [pen, setPen] = useState(0);
  const [notebook, setNotebook] = useState(10);
 
  
//Book  
  const bookcount=(num)=>{
    if(book+num < 0){
      return ;
    }
    setBook(book + num)
  
}
//pen
const pencount=(num)=>{
  if(pen+num < 0){
    return ;
  }
  setPen(pen + num)
  
}

//Notebook
const notecount=(num)=>{
 
if(notebook+num < 0){
  return ;
}
setNotebook(notebook + num)

}

  return (
    <div className="App">
      <div className ="items">
        <span>Books:</span>
        <button className="circlularButton" onClick={()=>bookcount(1)}>+</button>
        <span className="totalBooks">{book}</span>
        <button className="circlularButton" onClick={()=>bookcount(-1)}>-</button>
      </div>

      <div className ="items">
        <span>Pens :</span>
        <button className="circlularButton" onClick={()=>pencount(1)}>+</button>
        <span className="totalPens">{pen}</span>
        <button className="circlularButton" onClick={()=>pencount(-1)}>-</button>
      </div>

      <div className ="items">
        <span>NoteBooks :</span>
        <button className="circlularButton" onClick={()=>notecount(1)}>+</button>
        <span className ="totalNotebooks">{notebook}</span>
        <button className="circlularButton" onClick={()=>notecount(-1)}>-</button>
      </div>
    <hr />
      <div className="total"> Total = {0+book+pen+notebook} </div>

    </div>
  );
}

export default Inventory;