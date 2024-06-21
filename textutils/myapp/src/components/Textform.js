import React,{useState} from 'react'

export default function Textform(props) {
  const [text,seText]=useState("Enter the text ");
    const upperclick=()=>{
        let newtext=text.toUpperCase();
        seText(newtext);
        props.showAlert("Successfully converted to uppercase","success");
      }
    const lowerclick=()=>{
        let newtext=text.toLowerCase();
        seText(newtext);
      }
    const reset=()=>{
        
        seText("Enter the text ");
      }
    const Tbox=()=>{
        if(text==="Enter the text "){
        seText("");
      }
      }
      const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const changed=(event)=>{
      
      seText(event.target.value)
    }
    
  return (
    <>
    <div className='container'>
<div className="mb-3">
  <label htmlFor="Tbox" className="form-label"><h1>{props.heading}</h1></label>
  <textarea className="form-control" id="Tbox" value={text} onClick={Tbox} onChange={changed} rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={upperclick}>Convert to UpperCase</button>
<button className='btn btn-primary' onClick={lowerclick}>Convert to LowerCase</button>
<button className='btn btn-danger mx-2' onClick={reset}>Reset</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
</div>
<div className="container">
  <h2>Your text summary : </h2>
  <p>number of words : {text.split(/\s+/).length-1}</p>
  <p>number of characters: {text.length}</p>
  <p>Average Reading time: {((text.split(/\s+/).length-1)/200)*60+" seconds"}</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
    </>
  )
}
