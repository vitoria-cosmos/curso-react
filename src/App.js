import React, { useState } from 'react'

import "./App.css";

const App = () => {
    // const message = 'Hello, world!'
    const [message, setMessage] = useState("hello world");
    return (
      <>
        <div className="container">{message}</div>
        <button onClick={() => setMessage("hellooooo")}>
          mudar mensagem
        </button>   
      </>
      
    )
    
  
}

export default App;