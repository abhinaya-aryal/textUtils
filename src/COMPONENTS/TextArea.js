import React from 'react';
import { useState } from 'react'
function TextArea(props) {
    const [text, setText] = useState("");
    const [words, setWords] = useState(0);

    function upperClicked() {
        setText(text.toUpperCase());
    }

    function lowerClicked() {
        setText(text.toLocaleLowerCase());
    }
    function clearClicked() {
        setText("");
        setWords(0);
    }


    return (<>
        <div className="flex flex-col mx-auto mt-5 w-10/12 h-max">
            <textarea className={`px-3 py-1.5 text-base ${props.mode === "bg-indigo-600" ? "bg-white border-indigo-600 text-gray-700" : "bg-gray-900 border-slate-800 text-white"} font-normal   bg-clip-padding outline-none border-2 border-solid  rounded transition ease-in-out w-full ${props.mode === "bg-indigo-600" ? "placeholder:text-black" : "placeholder:text-white"} `} rows="6" placeholder='Enter your text here...' onChange={e => {
                setText(e.target.value);
                setWords(e.target.value.trim().split(" ").length)
            }} value={text} autoFocus />
            <div>
                <button className={`${props.mode} text-white font-semibold rounded p-2 m-2 ${props.hover}`} onClick={upperClicked}>UpperCase</button>
                <button className={`${props.mode} text-white font-semibold rounded p-2 m-2 ${props.hover}`} onClick={lowerClicked}>LowerCase</button>

                <button className={`${props.mode} text-white font-semibold rounded p-2 m-2 ${props.hover}`} onClick={clearClicked}>Clear</button>
            </div>
            <div className={`${props.mode === "bg-indigo-600" ? "text-black" : "text-white"}`}>No. Of Words:  {words}</div>
        </div>
    </>);
}
export { TextArea };