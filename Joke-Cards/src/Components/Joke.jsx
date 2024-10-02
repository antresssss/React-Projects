import React from "react";
export default function Joke(props){
    // console.log(props);
    return(    
        <div id="jokebox">
            <h1>{props.setup}</h1>
            <h2>{props.punchline}</h2>
        </div>
        
        
    )
}
