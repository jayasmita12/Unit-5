import { useState } from "react";
import { Timer } from "./components/timer";
import "./App.css";

function App() {
  const [timeshow, setTimeshow] = useState(true);

  return (
    <div className="App">
      {timeshow ? <Timer /> : null}
      <button style={{}} onClick={() => setTimeshow(!timeshow)}>{timeshow ? "hide" : "show"}</button>
    </div>
  );
}

export default App;