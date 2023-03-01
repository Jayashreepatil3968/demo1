import React from "react";
import "./style.css"

const Freeleancer=()=>
{
    let handleSubmit=()=>
    {
        alert("submitted successfully")
    }
    return(
        
        <>
        <button type="submit" onClick={handleSubmit} className="free">submit</button>
        </>
    )
}

export default Freeleancer;