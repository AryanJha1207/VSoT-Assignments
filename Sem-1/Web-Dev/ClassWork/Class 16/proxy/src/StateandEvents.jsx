import React, { useState } from 'react';

const StateandEvents = () => {
    const [text, setText] = useState("")

    const handlecahnge = (event) => {
        setText(event.target.value)
    }
    return (
        <>
        <div>Enter Text Here</div>
        <textarea value={text} onChange={handlecahnge}></textarea>
        </>
    )
}

