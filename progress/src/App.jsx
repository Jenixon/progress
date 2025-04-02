import React, { useState } from "react"
import Progress from "./components/progress"

function App() {


  const [show,setShow]=useState(false);


  return (
  
      <div className="justify-center flex items-center h-screen w-[100vw] gap-2 flex-col">
        {show ? <Progress/> : ""}
        <button onClick={()=>setShow(!show)}>Toggle button</button>

       </div>
  
  )
}

export default App
