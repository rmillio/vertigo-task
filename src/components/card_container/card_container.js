import React, { useState } from 'react';
import './card_container.css';
import Card from '../card/card';
import Modal from '../modal/modal';
import { useSelector } from 'react-redux';

export default function CardContainer() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const data = useSelector(state => state.data);
    const cards = [];
    data.forEach(card => {
        cards.push(
            <Card id={card.id} key={card.id} setShowModal={setShowModal} setModalContent={setModalContent}/>
        )
    });
    return (
        <div>
            <div className="CardContainer">
                {cards}
            </div>
            {showModal && <Modal setShowModal={setShowModal} modalContent={modalContent}/>}
        </div>
    );
}
