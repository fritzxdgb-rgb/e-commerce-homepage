import { use, useState } from "react";

function App() {
  const name = "Fritz"
  const age = 20;
  const a = 20;
  const b = 50;
  const c = "Fritz";
  const d= "Xandrey";
  let message;
  const isLoggedIn = true;
  const [count , setCount] = useState (0);
  const students = ["Anne", "Bob", "Charlie"];
  const [task, setTasks] =useState([]);
  const [input, setInput]= useState("");
  
  const addTask = () => {
    if(input.trim()=== "");
    setTasks([...task, input]);
    setInput("");
  }

 if(isLoggedIn)
     {
       message = "welcome back"
     }
     else
     {
      message = "login again"
     }
    
    

  return (
    
    <div className = "App">
      
      <h1>
        Hello {name}
      </h1>
      <h2>
        First Name: {c + d}
      </h2>

      <h2>
        
        a = 20 <br/>
        b = 50 <br/>
        is a greater than b? <br/>
        Answer : {a > b ? "yes" : "no"}
      </h2>
    
    <p>
       Count : {count}
    </p>

      <p>
        Age: {age}
      </p>
       <p>
        Sum = {a + b}
      </p>
      <button onClick = {() => setCount( count + 1)}>Increase</button> <br/>
      <button onClick = {() => setCount( count - 1)}>Decrease</button> <br/>
      <button onClick = {() => setCount(0)}>Reset</button>

<ul>
  {students.map((students, index) => (
    <li key={index}>{students}
     
  </li>

  ))}
</ul>


    <p>
      {message}
     </p>

    </div>
    
  );
}

export default App;