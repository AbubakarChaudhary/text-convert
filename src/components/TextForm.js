import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase", "warning");
  }
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case", "warning");
  }
  const handleClsClick = () => {
    let newText = ("");
    setText(newText)
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  const msg = new SpeechSynthesisUtterance()

  const speechHandler = (msg) => {
    msg.text = text
    window.speechSynthesis.speak(msg)
  }

  const handleCopy = () =>{
    console.log("copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "warning");
  }
  return (
    <>
      <div className="container">
        <h1 className='my-3'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" name="" value={text} onChange={handleOnChange} id="myBox" cols="30" rows="10"></textarea>
        </div>
        <button className="btn btn-danger mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-dark mx-2" onClick={handleClsClick}>Clear Text</button>
        <button className="btn btn-info mx-2" onClick={() => speechHandler(msg)}>Text to Speach</button>
        <button className="btn btn-warning mx-2" onClick={handleCopy}>Copy to Clipboard</button>
      </div>

      <div className="container">
        <h2 className='my-3'>Summary of Your Text :</h2>
        <p><strong>No. of Words: </strong> {text.split(" ").length} </p>
        <p><strong>No. of Characters: </strong> {text.length} </p>
        <p><strong>Time to Read No. of Words: </strong> {0.008 * text.split(" ").length} </p>
      </div>

      <div className="container">
        <h2 className="my-3">Preview 👇</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
