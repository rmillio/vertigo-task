import React from 'react';
import './body.css';

export default function Body(props) {
    return(
        <p className="Body">
            {props.value}
        </p>
    );
}