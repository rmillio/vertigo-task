import React, { useRef, useEffect, useState } from "react";
import "./modal.css";
import { RiCloseLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import Title from "../title/title";
import Body from "../body/body";
import Credits from "../credits/credits";
import loading from "../../images/loading.gif";

export default function Modal(props) {
  const modalRef = useRef();
  const [loaded, setLoaded] = useState(false);

  // Close modal when clicking outside
  useEffect(() => {
    const outsideClickHandler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", outsideClickHandler);
    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  });

  // Closing animation
  function closeModal() {
    const modal = document.getElementById("modal");
    const modalContainer = document.getElementById("modalContainer");
    modalContainer.style.opacity = 0;
    modalContainer.style.transition = "opacity 0.3s ease-out";
    modal.style.transform = "translateY(150%)";
    modal.style.transition = "transform 0.3s ease";
    // Deselect the card's image
    var item = document.getElementsByClassName("card");
    item[props.modalContent.id - 1].children[1].removeAttribute("style");
    setTimeout(() => {
      props.setShowModal(false);
    }, 300);
  }

  if (props.modalContent.author.avatar == null) {
    props.modalContent.author.avatar =
      "https://i1.wp.com/www.mnleadership.org/wp-content/uploads/2017/02/Anonymous-Avatar.png?ssl=1";
  }

  return (
    <div className="modal-container" id="modalContainer">
      <div className="modal" ref={modalRef} id="modal">
        <div className="close">
          <IconContext.Provider value={{ color: "gray", size: "25px" }}>
            <div
              style={{ marginLeft: "auto" }}
              onClick={() => {
                closeModal();
              }}
            >
              <RiCloseLine id="close-icon" />
            </div>
          </IconContext.Provider>
        </div>
        <div>
          {!loaded && (
            <div
              style={{
                width: "inherit",
                height: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={loading} alt="" />
            </div>
          )}
          <img
            className="modal-image"
            src={props.modalContent.thumbnail.large}
            onLoad={() => setLoaded(true)}
            style={loaded ? {} : { display: "none" }}
            alt=""
          />
          <div style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Title value={props.modalContent.title} />
            <Body value={props.modalContent.content} />
            <div
              style={{
                paddingTop: 15,
                paddingBottom: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: 50, borderRadius: 25 }}
                src={props.modalContent.author.avatar}
                alt="profilePic"
              />
              <div style={{ flexGrow: "1", marginLeft: 20 }}>
                <Credits value={props.modalContent} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
