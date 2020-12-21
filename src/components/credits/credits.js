import React from 'react';
import './credits.css';

export default function Credits(props) {
    var date = new Date(props.value.date * 1000).toString().split(" ");
    return(
        <div className="Credits">
            <p>
                {props.value.author.name} - {props.value.author.role}
            </p>
            <p style={{marginLeft: "auto"}}>
                {date[1] + " " + date[2] + ", " + date[3]}
            </p>
        </div>
    );
}