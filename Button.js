import React from 'react';
import'./Button.css'

function Button(props){
    return(
        <div >
            <button className="button">{props.buttonz}</button>
        </div>
    ) 

}
export default Button;