import React from 'react';
import './card.css';
import logo from '../../logo/logo.png';
import { useSelector } from 'react-redux';
import Title from '../title/title';
import Body from '../body/body';
import Credits from '../credits/credits';

export default function Card(props) {
    const data = useSelector(state => state.data);
    const cardData = data[props.id - 1];

    const showDetails = () => {
        props.setShowModal(true);
        props.setModalContent(cardData);
    }

    return (
        <div className="Card">
            <img className="Image"
                src={cardData.thumbnail.large}
                alt="cardImg"
            />

            <div className="HoveredImage">
                <button
                    onClick={() => {showDetails()}}
                    className="LearnMore">Learn More
                </button>
            </div>
            <div className="Logo">
                <img className="Dot"
                    src={logo}
                    alt="logo"
                />
            </div>
            <div
                className="TextBox"
                onClick={() => {showDetails()}}
            >
                <Title value={cardData.title}/>
            </div>
            <div className="TextBox" style={{marginTop: 5}}>
                <Body value={cardData.content}/>
            </div>
            <div className="TextBox" style={{flexGrow: 1, marginBottom: 20, marginTop: 5}}>
                <Credits value={cardData}/>
            </div>
        </div>
    );
}