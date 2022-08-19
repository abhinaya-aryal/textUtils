import React from 'react';
function About(props) {
    return (<>
        <div className={`mx-auto mt-5 w-10/12 h-max  text-center ${props.mode === "bg-indigo-600" ? "text-black" : "text-white"}`}>Hello, My name is Abhinaya Aryal. I had worked on this project to learn the web development using react library. This is my first work on react. This development helps me a lot to understand props and hooks in react......will be continued.....</div>
        <div className={`${props.mode === "bg-indigo-600" ? "text-black" : "text-white"} mx-auto mt-5 w-max h-max  text-center`}>Copyright © 2022 abhinayaaryal.com</div>
    </>)
}

export { About };