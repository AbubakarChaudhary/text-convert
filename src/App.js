
import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert]= useState(null)
  const [mode, setMode]= useState('light')
  const [textColor ,setTextColor] = useState ('dark')

  const showAlert =(message , type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      setTextColor('light');
      document.body.style.backgroundColor= 'black';
      document.body.style.color= 'white';
      showAlert("Dark Mode Activated", "danger");
    }else{
      setMode('light');
      setTextColor('dark');
      document.body.style.backgroundColor= 'white';
      document.body.style.color= 'black';
      showAlert("light Mode Activated", "warning");
    }
  }
  return (
    <>
  <Router>
     <Navbar title="Text Converter" mode={mode} toggleMode={toggleMode} textColor={textColor}/>
     <Alert alert={alert}/>

    <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<TextForm heading="Enter your text :" showAlert={showAlert} />}/>
      </Routes>
    </div>
    </Router>
    </>
   
  );
}

export default App;
