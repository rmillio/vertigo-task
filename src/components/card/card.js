import React, { useState } from "react";
import "./card.css";
import logo from "../../images/logo.png";
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
        <img className="dot" src={logo} alt="logo" />
      </div>
      <div
        className="text-box"
        onClick={() => {
          showDetails();
        }}
      >
        <div className="text">
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
