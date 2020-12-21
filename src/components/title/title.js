import React from 'react';
import './title.css';
export default function Title(props) {
    return(
        <h1 className="Title" >
            {props.value}
        </h1>
    );
}