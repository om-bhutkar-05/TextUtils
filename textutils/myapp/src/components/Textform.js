import React,{useState} from 'react'

export default function Textform(props) {
    const upperclick=()=>{
        let newtext=text.toUpperCase();
        seText(newtext);
    }
    const changed=(event)=>{
      
      seText(event.target.value)
    }
    const [text,seText]=useState("Enter the text ");
  return (
    <>
<div className="mb-3">
  <label htmlFor="Tbox" className="form-label"><h1>{props.heading}</h1></label>
  <textarea className="form-control" id="Tbox" value={text} onChange={changed} rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={upperclick}>Convert to uppercase</button>
    </>
  )
}
