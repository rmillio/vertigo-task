import React, { useState } from "react";
import "./card.css";
import loading from "../../images/loading.gif";
import { useSelector } from "react-redux";
import Title from "../title/title";
import Body from "../body/body";
import Credits from "../credits/credits";

export default function Card(props) {
  const data = useSelector((state) => state.data);
  const [loaded, setLoaded] = useState(false);
  const cardData = data[props.id - 1];

  const showDetails = () => {
    // Keep the image dark while the modal is open
    var item = document.getElementsByClassName("card");
    item[props.id - 1].children[1].style.backgroundColor = "rgba(0, 0, 0, 0.7)";

    props.setShowModal(true);
    props.setModalContent(cardData);
  };

  return (
    <div className="card">
      {!loaded && (
        <div className="loading">
          <img src={loading} alt="loading..." />
        </div>
      )}
      <img
        className="image"
        src={cardData.thumbnail.small}
        alt=""
        onLoad={() => setLoaded(true)}
        style={loaded ? {} : { display: "none" }}
      />
      {loaded && (
        <div className="hovered-image">
          <button
            onClick={() => {
              showDetails();
            }}
            className="learn-more"
          >
            {" "}
            Learn More
          </button>
        </div>
      )}
      <div className="logo">
        <svg width="70" height="40">
          <g id="both-dots">
            <title>Layer 1</title>
            <ellipse
              ry="5"
              rx="5"
              id="blue-dot"
              cy="23"
              cx="6"
              fill="#00bcd3"
            />
            <ellipse
              ry="5"
              rx="5"
              id="yellow-dot"
              cy="23"
              cx="20"
              fill="#fec106"
            />
          </g>
        </svg>
      </div>
      <div
        className="text-box"
        onClick={() => {
          showDetails();
        }}
      >
        <div className="text" style={{ marginTop: -12 }}>
          <Title value={cardData.title} />
        </div>
      </div>
      <div className="text-box" style={{ marginTop: 5 }}>
        <Body value={cardData.content} />
      </div>
      <div
        className="text-box"
        style={{ flexGrow: 1, marginBottom: 20, marginTop: 5 }}
      >
        <Credits value={cardData} />
      </div>
    </div>
  );
}
