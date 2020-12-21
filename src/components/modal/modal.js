import React, { useRef, useEffect } from 'react';
import './modal.css';
import { RiCloseLine } from "react-icons/ri";
import {IconContext} from "react-icons";
import Title from '../title/title';
import Body from '../body/body';
import Credits from '../credits/credits';

export default function Modal(props) {
    const wrapperRef = useRef();

    useEffect(() => {
        const outsideClickHandler = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                props.setShowModal(false);
            }
        }
        document.addEventListener('mousedown', outsideClickHandler)
        return () => {
            document.removeEventListener('mousedown', outsideClickHandler)
        }
    });

    if (props.modalContent.author.avatar == null) {
        props.modalContent.author.avatar = "https://i1.wp.com/www.mnleadership.org/wp-content/uploads/2017/02/Anonymous-Avatar.png?ssl=1";
    }

    return(
        <div className="ModalContainer">
            <div className="Modal" ref={wrapperRef}>
                <div className="Close">
                    <IconContext.Provider
                        value={{ color: 'gray', size: '25px' }}
                    >
                    <div
                        style={{marginLeft: "auto"}}
                        onClick={() => {props.setShowModal(false)}}
                    >
                        <RiCloseLine />
                    </div>
                    </IconContext.Provider>
                </div>
                <div>
                    <img className="ModalImage"
                        src={props.modalContent.thumbnail.large}
                        alt="modalImg"
                    />
                    <div style={{paddingLeft: 20, paddingRight: 20}}>
                        <Title value={props.modalContent.title}/>
                        <Body value={props.modalContent.content}/>
                        <div style={{paddingTop: 15, paddingBottom: 20, display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <img style={{width: 50, borderRadius: 25}}
                                src={props.modalContent.author.avatar}
                                alt="profilePic"
                            />
                            <div style={{flexGrow: "1", marginLeft: 20}}>
                                <Credits value={props.modalContent}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
