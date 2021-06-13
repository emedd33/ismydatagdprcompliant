import React, { useState } from 'react';
import './App.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';


function App() {
  const [message, setMessage] = useState(false)
  const handleClick = () => {
    setMessage(true)
  }
  return (
    <div className="container">

      <div className="form" >
        <div style={{ width: "100%", margin: "1rem", display: "flex", justifyContent: "center" }}>

          <Button type="primary" onClick={handleClick}>Is my data GDPR-compliant?</Button>
        </div>
        <div style={{ width: "100%", margin: "1rem", display: "flex", justifyContent: "center" }}>
          {message ?
            <h2 style={{ color: "red" }}>NO</h2>
            : null
          }
        </div>
      </div>
    </div>
  );
}

export default App;
