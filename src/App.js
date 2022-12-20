import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [num,setnum] = useState("0")

  const btn1= () =>
  {
    if(num<100)
    {
      // setnum("+1") addition
      setnum(Number(num)+1);
    }
  }
  const btn2= () =>
  {
    if(num>-100)
    {
      // setnum("-1") //subtection
      setnum(num-1);

    }
  }
  const btnhandler = (e) =>
  {
      setnum(e.target.value);
  }
  return (
    <div className="App">
        
        {/* <h1>{sum}</h1> */}
        <input type="button" value="+" onClick={btn1}/>

        <input type="text" value={num} onChange={btnhandler}/>

        {/* <h1>{sub}</h1> */}
        <input type="button" value="-" onClick={btn2}/>
        
    </div>
  );
}

export default App;
